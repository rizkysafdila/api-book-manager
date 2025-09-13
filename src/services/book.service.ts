import { UUID } from "crypto"
import { Book } from "../models/book.model"
import { IBook, TBookPayload } from "../types/book.type"
import { BookValidation } from "../validations/book.validation"
import { WhereOptions } from "sequelize"

export class BookService {
  static async getAllBooks(filters?: WhereOptions<IBook>) {
    return Book.findAll({ where: filters })
  }

  static async getBookById(id: UUID) {
    return Book.findByPk(id)
  }

  static async createBook(data: TBookPayload) {
    const validated = BookValidation.CREATE.parse(data)
    return Book.create(validated)
  }

  static async updateBook(id: UUID, data: Partial<TBookPayload>) {
    const validated = BookValidation.UPDATE.parse({ id, ...data });
    const book = await Book.findByPk(id)
    if (!book) return null
    return book.update(validated)
  }

  static async deleteBook(id: UUID) {
    const book = await Book.findByPk(id)
    if (!book) return null
    await book.destroy()
    return book
  }
}
