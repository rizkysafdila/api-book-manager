import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../configs/sequelize";
import { IBook } from "../types/book.type";

interface BookCreationAttributes extends Optional<IBook, "id"> {}

export class Book extends Model<IBook, BookCreationAttributes> implements IBook {
  public id!: string;
  public title!: string;
  public author!: string;
  public year!: number;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;
}

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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Book",
    tableName: "books",
  }
);
