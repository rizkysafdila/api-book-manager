import { Book } from "../models/book.model";

export class BookService {
  static async getAllBooks(filters?: any) {
    return Book.findAll({ where: filters });
  }

  static async getBookById(id: number) {
    return Book.findByPk(id);
  }

  static async createBook(data: { title: string; author: string; year: number }) {
    return Book.create(data);
  }

  static async updateBook(id: number, data: Partial<{ title: string; author: string; year: number }>) {
    const book = await Book.findByPk(id);
    if (!book) return null;
    return book.update(data);
  }

  static async deleteBook(id: number) {
    const book = await Book.findByPk(id);
    if (!book) return null;
    await book.destroy();
    return book;
  }
}
