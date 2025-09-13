import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./configs/database"
import logger from "./configs/logger"
import morganMiddleware from "./middlewares/morgan"
import errorMiddleware from "./middlewares/error"
import router from "./routes"
import { envConfig } from "./configs/env"

dotenv.config()
const app = express()

app.use(morganMiddleware)

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
  await connectDB()
  app.listen(envConfig.APP_PORT, () => {
    logger.info(`🚀 Server running at ${envConfig.APP_URL}:${envConfig.APP_PORT}`)
  })
}

start()

export default app
