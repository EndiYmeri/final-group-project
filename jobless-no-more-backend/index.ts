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
        where: { id: decodeData.id }
    })
    return frelanceUser
}



app.post('/signup/:type', async (req, res) => {
    const { firstName, lastName, email, password, location } = req.body
    const type = req.params.type

    try {
        const hash = bcrypt.hashSync(password, 8)
        const signUpData = {firstName, lastName, email, password: hash, location}


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
    const { email, password } = req.body
    try {
        const freelanceUser = await prisma.freelanceUser.findUnique({
            where: { email: email }
        })
        //@ts-ignore
        const passwordMatch = bcrypt.compareSync(password, freelanceUser.password)

        if (freelanceUser && passwordMatch) {
            res.send({ freelanceUser, token: createToken(freelanceUser.id) })
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
app.get('/jobs', async (req,res) =>{
    const jobs = await prisma.job.findMany({include: {skills: true, proposals: true, difficulty: true, clientUser: true, Category: true}})
    res.send(jobs)
})

app.get('/jobs/:id', async (req,res) =>{
    const id = Number(req.params.id)
    try {
        const job = await prisma.job.findUnique({where:{id},include: {Category: true, clientUser: true, difficulty: true, proposals: true, skills: true}})
        if(job){
            res.send(job)
        }
        else{
            throw Error('Job with this Id doesnt exists')
        }
    } catch (err) {
        //@ts-ignore
        res.status(400).send({error: err.message})
    }
})