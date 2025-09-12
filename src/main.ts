import express from "express"
import dotenv from "dotenv"
import { connectDB, sequelize } from "./configs/database"
import bookRoutes from "./routes/book.routes"
// import { logger } from "./middleware/logger"
// import jwt from "jsonwebtoken"

dotenv.config()
const app = express()

app.use(express.json())
// app.use(logger)

// Simple login endpoint (no real users, just demo)
// app.post("/auth/login", (req, res) => {
//   const { username } = req.body
//   const token = jwt.sign({ username }, process.env.JWT_SECRET || "changeme", {
//     expiresIn: "1h",
//   })
//   res.json({ token })
// })

app.use(bookRoutes)

const PORT = process.env.PORT || 4000
const BASE_URL = process.env.APP_URL

const start = async () => {
  await connectDB()
  await sequelize.sync({ alter: true })
  app.listen(PORT, () => console.log(`🚀 Server running at ${BASE_URL}:${PORT}`))
}

start()

export default app
