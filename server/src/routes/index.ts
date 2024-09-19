import { Express } from "express";

import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import bookRoutes from "./bookRoutes";

export function registerRoutes(app: Express) {
  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);
  app.use("/book", bookRoutes);
}
