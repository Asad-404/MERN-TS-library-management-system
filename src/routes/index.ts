import { Express } from "express";
import authRoutes from "./AuthRoutes";

export function registerRoutes(app: Express) {
  app.use("/auth", authRoutes);
}
