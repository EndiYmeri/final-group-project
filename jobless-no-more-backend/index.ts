import express from 'express'
import cors from 'cors'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { PrismaClient } from "@prisma/client"
const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4000

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
const prisma = new PrismaClient()

function createToken(id: number, type: string) {
    //@ts-ignore
    return jwt.sign({ id: id, type }, process.env.Secret)
}


async function getUserFromToken(token: string) {
    //@ts-ignore
    const decodeData = jwt.verify(token, process.env.Secret)
    //@ts-ignore
    const foundUser = decodeData.type === "freelancer" ? await prisma.freelanceUser.findUnique({
        //@ts-ignore
        where: { id: decodeData.id }, include: { skills: true, proposals: true, Education: true, Language: true }
    }) : await prisma.clientUser.findUnique({
        //@ts-ignore
        where: { id: decodeData.id }, include: { jobs: true }
    })
    return foundUser
}

// async function getFreelanceUserFromToken(token: string) {
//     //@ts-ignore
//     const decodeData = jwt.verify(token, process.env.Secret)
//     const freelanceUser = await prisma.freelanceUser.findUnique({
//         //@ts-ignore
//         where: { id: decodeData.id }, include: { skillS: true, proposals: true }
//     })
//     console.log(freelanceUser)
//     return freelanceUser
// }

// async function getClientUserFromToken(token: string) {
//     //@ts-ignore
//     const decodeData = jwt.verify(token, process.env.Secret)
//     const clientUser = await prisma.clientUser.findUnique({
//         //@ts-ignore
//         where: { id: decodeData.id }, include: { jobs: true }
//     })
//     return clientUser
// }

app.get('/validate', async (req, res) => {
    const token = req.headers.authorization || ""
    try {
        if (token) {
            const user = await getUserFromToken(token)
            if (user) {
                res.send(user)
            }
            else {
                res.status(404).send({ error: "User not found" })
            }
        } else {
            res.status(404).send({ error: "Invalid token or token not found" })
        }
    }
    catch (err) {
        // @ts-ignore
        res.status(400).send({ error: err.message })
    }

})


app.post('/signup/:type', async (req, res) => {
    const { firstName, lastName, email, password, location } = req.body
    const type = req.params.type

    try {
        const hash = bcrypt.hashSync(password, 8)
        const signUpData = { firstName, lastName, email, password: hash, location }
        const createdUser =
            type === "freelancer"
                ? await prisma.freelanceUser.create({
                    data: signUpData,
                    include: { proposals: true, skills: true, Education: true, Language: true }
                })
                : await prisma.clientUser.create({
                    data: signUpData,
                    include: { jobs: true }

                })


        res.send({ createdUser, token: createToken(createdUser.id, type) })
    }
    catch (err) {
        // @ts-ignore
        res.status(400).send({ error: err.message })
    }
})

app.post('/login', async (req, res) => {
    const { email, password, userType } = req.body
    try {

        const foundUser =
            userType === "freelancer" ?
                await prisma.freelanceUser.findUnique({
                    where: { email: email },
                    include: { proposals: true, skills: true, Education: true, Language: true }
                })
                : await prisma.clientUser.findUnique({
                    where: { email: email },
                    include: { jobs: true }
                })
        //@ts-ignore
        const passwordMatch = bcrypt.compareSync(password, foundUser.password)

        if (foundUser && passwordMatch) {
            res.send({ foundUser, token: createToken(foundUser.id, userType) })
        }
        else {
            throw Error('Something went  wrong!')
        }
    }
    catch (err) {
        // @ts-ignore
        res.status(400).send({ error: 'User or password invalid' })
    }
})


app.get('/jobs', async (req, res) => {
    const jobs = await prisma.job.findMany({ include: { skills: true, duration: true, proposals: true, difficulty: true, clientUser: true, Category: true } })
    res.send(jobs)
})

app.get('/jobs/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const job = await prisma.job.findUnique({ where: { id }, include: { Category: true, clientUser: true, difficulty: true, proposals: true, skills: true, duration: true } })
        if (job) {
            res.send(job)
        }
        else {
            throw Error('Job with this Id doesnt exists')
        }
    } catch (err) {
        //@ts-ignore
        res.status(400).send({ error: err.message })
    }
})


app.post('/jobs', async (req, res) => {
    const { duration, title, location, content, skills, difficulty, category } = req.body
    const token = req.headers.authorization || ''

    console.log(req.body);

    const skillsMapped = skills.map((skill: any) => ({ name: skill }))
    try {
        const clientUser = await getUserFromToken(token)
        if (clientUser) {

            const jobCreated = await prisma.job.create({
                data: {
                    content,
                    location,
                    title,
                    skills: { connect: skillsMapped },
                    duration: { connect: { name: duration } },
                    Category: { connect: { name: category.name } },
                    difficulty: { connect: { name: difficulty } },
                    clientUser: { connect: { email: clientUser.email } },
                    published: true
                },
                include: {
                    Category: true, skills: true, clientUser: true, difficulty: true, duration: true, proposals: true
                }
            })

            if (jobCreated) {
                res.send(jobCreated)
            } else {
                throw Error()
            }
        } else {
            throw Error("Client not found or broken token")
        }
    } catch (err) {
        // @ts-ignore
        res.send({ error: err.message })
    }
})

app.get('/jobsBasedOnUserSkills', async (req, res) => {
    const token = req.headers.authorization || ''
    try {
        const user = await getUserFromToken(token)
        if (user?.type === "freelancer") {
            const jobs = await prisma.job.findMany({
                where: {
                    // @ts-ignore
                    skills: { every: { name: { in: user.skills.map(skill => skill.name) } } }
                },
                include: {
                    Category: true, clientUser: true, difficulty: true, proposals: true, skills: true, duration: true
                }
            })

            res.send(jobs)
        }
        else {
            res.status(404).send({ error: 'You need to login before.' })
        }
    }
    catch (err) {
        // @ts-ignore
        res.status(400).send({ error: err.message })
    }
})
app.post('/proposals', async (req, res) => {
    const { jobId, freelanceUserId } = req.body
    const token = req.headers.authorization;
    try {
        await prisma.proposal.create({ data: { jobId, freelanceUserId } })
        const freelanceUser = await getUserFromToken(token as string)
        if (freelanceUser) {
            res.send(freelanceUser)
        }
    } catch (err: any) {
        res.status(400).send({ error: err.message });
    }
})

app.get('/categories', async (req, res) => {
    const categories = await prisma.category.findMany({
        include: { jobs: true }
    })
    res.send(categories)
})

app.post('/categories', async (req, res) => {
    const { name } = req.body
    console.log(name);

    // const token = req.headers.authorization;
    try {
        const newCategory = await prisma.category.create({
            data: { name }
        })
        if (newCategory) {
            res.send(newCategory)
        }
    } catch (err) {
        // @ts-ignore
        res.status(400).send({ error: "Category already exists" })
    }

})

app.get("/categories/:name", async (req, res) => {
    const name = req.params.name;

    try {
        const categoryName = await prisma.category.findMany({
            where: { name },
            include: { jobs: { include: { Category: true } } },
        });
        if (categoryName) {
            res.send(categoryName);
        } else {
            throw Error("Category with this Name doesnt exists.");
        }
    } catch (err) {
        //@ts-ignore
        res.status(400).send({ error: err.message });
    }
});

app.get("/skills", async (req, res) => {
    const skills = await prisma.skill.findMany({
        include: { jobs: true, freelanceUsers: true },
    });
    res.send(skills);
});

app.post('/skill', async (req, res) => {
    const { name } = req.body
    console.log(name);

    // const token = req.headers.authorization;
    try {
        const newSkill = await prisma.skill.create({
            data: { name }
        })
        if (newSkill) {
            res.send(newSkill)
        }
    } catch (err) {
        // @ts-ignore
        res.status(400).send({ error: "Skill already exists" })
    }

})


app.get("/skills/:name", async (req, res) => {
    const name = req.params.name;
    try {
        const skills = await prisma.skill.findMany({
            where: {
                name
            },
        });
        if (skills) {
            res.send(skills);
        } else {
            throw Error("Skills with this NAME doesnt exists.");
        }
    } catch (err) {
        //@ts-ignore
        res.status(400).send({ error: err.message });
    }
});



app.post('/education', async (req, res) => {
    const { institute, profileOfStudies, fromYear, endYear } = req.body
    const token = req.headers.authorization || ''
    try {
        const user = await getUserFromToken(token)
        const education = await prisma.education.create({
            // @ts-ignore
            data: { institute: institute, profileOfStudies: profileOfStudies, fromYear: fromYear, endYear: endYear, freelanceUserId: user.id }
        })
        if (education) {
            res.send(education)
        }
    }
    catch (err) {
        // @ts-ignore
        res.status(400).send({ error: err.message })
    }
});


app.post('/language', async (req, res) => {
    const { languageName } = req.body
    const token = req.headers.authorization || ''
    try {
        const user = await getUserFromToken(token)
        const language = await prisma.language.create({
            // @ts-ignore
            data: { languageName: languageName, freelanceUser: { connect: { id: user.id } } }
        })
        if (language) {
            res.send(language)
        }
    }
    catch (err) {
        // @ts-ignore
        res.status(400).send({ error: err.message })
    }
});