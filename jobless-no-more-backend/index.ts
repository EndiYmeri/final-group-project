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

function createToken(id: number) {
    //@ts-ignore
    return jwt.sign({ id: id }, process.env.Secret)
}

async function getFreelanceUserFromToken(token: string) {
    //@ts-ignore
    const decodeData = jwt.verify(token, process.env.Secret)
    const frelanceUser = await prisma.freelanceUser.findUnique({
        //@ts-ignore
        where: { id: decodeData.id }, include: { skillS: true }
    })
    return frelanceUser
}

app.get('/validate', async (req, res) => {
    const token = req.headers.authorization || ""
    try {
        if (token) {

            const user = await getFreelanceUserFromToken(token)
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
            type === "client"
                ? await prisma.freelanceUser.create({
                    data: signUpData
                })
                : await prisma.clientUser.create({
                    data: signUpData
                })


        res.send({ createdUser, token: createToken(createdUser.id) })
    }
    catch (err) {
        // @ts-ignore
        res.status(400).send({ error: err.message })
    }
})

app.post('/login', async (req, res) => {
    const { email, password, type } = req.body
    try {
        
        const foundUser = 
            type === "freelance"? 
        await prisma.freelanceUser.findUnique({
            where: { email: email }
        }) 
        : await prisma.clientUser.findUnique({
            where: { email: email }
        }) 
        //@ts-ignore
        const passwordMatch = bcrypt.compareSync(password, foundUser.password)

        if (foundUser && passwordMatch) {
            res.send({ foundUser, token: createToken(foundUser.id) })
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
    const jobs = await prisma.job.findMany({ include: { skills: true, proposals: true, difficulty: true, clientUser: true, Category: true } })
    res.send(jobs)
})

app.get('/jobs/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const job = await prisma.job.findUnique({ where: { id }, include: { Category: true, clientUser: true, difficulty: true, proposals: true, skills: true } })
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


app.get('/jobsBasedOnUserSkills', async (req, res) => {
    const token = req.headers.authorization || ''
    try {
        const user = await getFreelanceUserFromToken(token)
        if (user) {
            const jobs = await prisma.job.findMany({
                // @ts-ignore
                where: {
                    skills: { every: { name: { in: user.skillS.map(skill => skill.name) } } }
                },
                include: { Category: true, clientUser: true, difficulty: true, proposals: true, skills: true }
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


app.get("/categories", async (req, res) => {
    const categories = await prisma.category.findMany({
      include: { jobs: true },
    });
    res.send(categories);
  });
  app.get("/categories/:id", async (req, res) => {
    const id = Number(req.params.id);
  
    try {
      const category = await prisma.category.findUnique({
        where: { id },
        include: { jobs: { include: { Category: true } } },
      });
      if (category) {
        res.send(category);
      } else {
        throw Error("Category with this ID doesnt exists.");
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