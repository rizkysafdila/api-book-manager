import logger from "./logger"
import { sequelize } from "./sequelize"

export const connectDB = async () => {
  try {
    await sequelize.authenticate()
    logger.info("✅ MySQL connected")
  } catch (error) {
    logger.error("❌ DB connection failed:", error)
    process.exit(1)
  }
}
