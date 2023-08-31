import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import './db'
import commandRouter from './routes/command-router'

dotenv.config({ path: path.resolve(__dirname, './../.env') })

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/commands', commandRouter)

export default app
