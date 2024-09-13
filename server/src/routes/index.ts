import { Express } from "express";

import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";

export function registerRoutes(app: Express) {
  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);
}
