import express from "express";
import AuthController from "../controllers/authController";
import { Schemas, validateSchema } from "../middlewares/validation";

const router = express.Router();

router.post(
  "/register",
  validateSchema(Schemas.user.create, "body"),
  AuthController.handleRegister
);

router.post(
  "/login",
  validateSchema(Schemas.user.login, "body"),
  AuthController.handleLogin
);

export default router;
