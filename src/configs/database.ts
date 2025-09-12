import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

export const sequelize = new Sequelize(
  process.env.DB_NAME || "book_manager",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
)

export const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log("✅ MySQL connected")
  } catch (error) {
    console.error("❌ DB connection failed:", error)
    process.exit(1)
  }
}
