import express from "express";
import libraryCardController from "../controllers/libraryCardController";
import { Schemas, validateSchema } from "../middlewares/validation";

const router = express.Router();

router.get(
  "/:cardId",
  validateSchema(Schemas.libraryCard.get, "params"),
  libraryCardController.getLibraryCard
);
router.post(
  "/",
  validateSchema(Schemas.libraryCard.create, "body"),
  libraryCardController.createLibraryCard
);

export default router;
