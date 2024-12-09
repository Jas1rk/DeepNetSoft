import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './Router/router'


dotenv.config()


const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)


app.listen(process.env.PORT, () => console.log(`Server Is Running on ${process.env.PORT}🚀`))