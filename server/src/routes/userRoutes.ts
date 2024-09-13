import express from "express";
import userController from "../controllers/userController";
import { Schemas, validateSchema } from "../middlewares/validation";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get(
  "/:userId",
  validateSchema(Schemas.user.userId, "params"),
  userController.getUserById
);
router.put(
  "/",
  validateSchema(Schemas.user.update, "body"),
  userController.updateUser
);
router.delete(
  "/:userId",
  validateSchema(Schemas.user.userId, "params"),
  userController.deleteUser
);

export default router;
