import express from "express";
import bookController from "../controllers/bookController";
import { validateSchema, Schemas } from "../middlewares/validation";

const router = express.Router();

router.get("/", bookController.getAllBooks);
router.post(
  "/",
  validateSchema(Schemas.book.create, "body"),
  bookController.createBook
);
router.put(
  "/",
  validateSchema(Schemas.book.update, "body"),
  bookController.updateBook
);
router.delete(
  "/:barcode",
  validateSchema(Schemas.book.delete, "params"),
  bookController.deleteBook
);
router.get("/query", bookController.searchForBooksByQuery);

export default router;
