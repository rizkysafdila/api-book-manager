import { NextFunction, Request, Response } from "express"
import { errorResponse, successResponse } from "../utils/helpers"
import { BookService } from "../services/book.service"
import logger from "../configs/logger"
import { UUID } from "crypto"

export class BookController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const filters = req.query
      const books = await BookService.getAllBooks(filters)
      res.json(successResponse(books, "Books fetched successfully"))
    } catch (error) {
      next(error)
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const book = await BookService.getBookById(id as UUID)
      if (!book) {
        return res.status(404).json(errorResponse("Book not found"))
      }
      res.json(successResponse(book, "Book fetched successfully"))
    } catch (error) {
      next(error)
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, author, year } = req.body
      const newBook = await BookService.createBook({ title, author, year })
      res.status(201).json(successResponse(newBook, "Book created successfully"))
    } catch (error) {
      next(error)
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const updatedBook = await BookService.updateBook(id as UUID, req.body)
      if (!updatedBook) {
        return res.status(404).json(errorResponse("Book not found"))
      }
      res.json(successResponse(updatedBook, "Book updated successfully"))
    } catch (error) {
      next(error)
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const deletedBook = await BookService.deleteBook(id as UUID)
      if (!deletedBook) {
        return res.status(404).json(errorResponse("Book not found"))
      }
      res.json(successResponse(null, "Book deleted successfully"))
    } catch (error) {
      next(error)
    }
  }
}
