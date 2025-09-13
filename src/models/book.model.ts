import { DataTypes, Model, Sequelize } from "sequelize"
import { IBook, TBookPayload } from "../types/book.type"
import { sequelize } from "../configs/sequelize"

export class Book extends Model<IBook, TBookPayload> implements IBook {
  public id!: string
  public title!: string
  public author!: string
  public year!: number
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  static initModel(sequelize: Sequelize): typeof Book {
    Book.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        author: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        year: {
          type: "YEAR",
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: "Book",
        tableName: "books",
      }
    )

    return Book
  }
}

Book.initModel(sequelize)
