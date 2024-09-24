import express from "express";
import loanController from "../controllers/loanController";
import { Schemas, validateSchema } from "../middlewares/validation";

const router = express.Router();

router.get("/", loanController.getAllRecords);
router.post(
  "/",
  validateSchema(Schemas.loan.create, "body"),
  loanController.createRecord
);
router.put(
  "/",
  validateSchema(Schemas.loan.update, "body"),
  loanController.updateRecord
);
router.post(
  "/query",
  validateSchema(Schemas.loan.query, "body"),
  loanController.getRecordByProperty
);

export default router;
