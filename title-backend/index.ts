import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())


const PORT = 4000

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}`))