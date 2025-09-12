import { Router } from "express";
import { BookController } from "../controllers/book.controller";

const bookRouter: Router = Router();
// bookRouter.use(authMiddleware)

bookRouter.get("/api/books", BookController.getAll);
bookRouter.get("/api/books/:id", BookController.getById);
bookRouter.post("/api/books", BookController.create);
bookRouter.put("/api/books/:id", BookController.update);
bookRouter.delete("/api/books/:id", BookController.delete);

export default bookRouter;
