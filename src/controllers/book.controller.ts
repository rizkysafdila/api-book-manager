import { Request, Response } from "express";
import { errorResponse, successResponse } from "../utils/helpers";
import { BookService } from "../services/book.service";

export class BookController {
  static async getAll(req: Request, res: Response) {
    try {
      const filters = req.query;
      const books = await BookService.getAllBooks(filters);
      res.json(successResponse(books, "Books fetched successfully"));
    } catch (error) {
      res.status(500).json(errorResponse("Error fetching books", error));
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const book = await BookService.getBookById(Number(id));
      if (!book) {
        return res.status(404).json(errorResponse("Book not found"));
      }
      res.json(successResponse(book, "Book fetched successfully"));
    } catch (error) {
      res.status(500).json(errorResponse("Error fetching book", error));
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { title, author, year } = req.body;
      const newBook = await BookService.createBook({ title, author, year });
      res.status(201).json(successResponse(newBook, "Book created successfully"));
    } catch (error) {
      res.status(400).json(errorResponse("Error creating book", error));
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedBook = await BookService.updateBook(Number(id), req.body);
      if (!updatedBook) {
        return res.status(404).json(errorResponse("Book not found"));
      }
      res.json(successResponse(updatedBook, "Book updated successfully"));
    } catch (error) {
      res.status(400).json(errorResponse("Error updating book", error));
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedBook = await BookService.deleteBook(Number(id));
      if (!deletedBook) {
        return res.status(404).json(errorResponse("Book not found"));
      }
      res.json(successResponse(null, "Book deleted successfully"));
    } catch (error) {
      res.status(500).json(errorResponse("Error deleting book", error));
    }
  }
}
