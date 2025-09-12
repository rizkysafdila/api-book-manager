import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../configs/database"

interface BookAttributes {
  id: number
  title: string
  author: string
  year: number
}

interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

export class Book extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes {
  public id!: number
  public title!: string
  public author!: string
  public year!: number
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Book",
    tableName: "books",
    timestamps: true,
  }
)
