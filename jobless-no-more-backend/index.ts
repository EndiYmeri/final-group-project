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



app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password, image, bio, location, totalReceived } = req.body

    try {
        const hash = bcrypt.hashSync(password, 8)
        const freelanceUser = await prisma.freelanceUser.create({
            data: { firstName: firstName, lastName: lastName, email: email, password: hash, image: image, bio: bio, location: location, totalReceived: totalReceived }
        })
        res.send({ freelanceUser, token: createToken(freelanceUser.id) })
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
