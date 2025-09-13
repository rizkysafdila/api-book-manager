import { Sequelize } from 'sequelize'
import { envConfig } from './env'
import { SequelizeDialect } from '../types'

export const sequelize = new Sequelize({
  dialect: envConfig.DIALECT as SequelizeDialect,
  host: envConfig.DATABASE_HOST,
  port: Number(envConfig.DATABASE_PORT),
  username: envConfig.DATABASE_USERNAME,
  password: envConfig.DATABASE_PASSWORD,
  database: envConfig.DATABASE_NAME,
  logging: false,
})
