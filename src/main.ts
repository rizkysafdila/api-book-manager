import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./configs/database"
import logger from "./configs/logger"
import morganMiddleware from "./middlewares/morgan"
import errorMiddleware from "./middlewares/error"
import router from "./routes"

dotenv.config()
const app = express()

app.use(morganMiddleware)

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use('/api', router)
app.use(errorMiddleware)

const PORT = process.env.PORT || 4000
const BASE_URL = process.env.APP_URL

const start = async () => {
  await connectDB()
  app.listen(PORT, () => {
    logger.info(`🚀 Server running at ${BASE_URL}:${PORT}`)
  })
}

start()

export default app
