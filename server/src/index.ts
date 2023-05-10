import express from "express"
import cors from "cors"
import { generate } from "./generate"


const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3005

app.get('/', (req, res) => {
    res.send('Hello world from our api')
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

app.post('/generate', async (req, res) => {
    try {
        const queryDescription = req.body.queryDescription
        const sqlQuery = await generate(queryDescription)
        res.json(sqlQuery)
    } catch (error) {
        res.json(error)
    }
})