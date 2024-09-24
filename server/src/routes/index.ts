import { Express } from "express";

import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import bookRoutes from "./bookRoutes";
import cardRoutes from "./libraryCardRoutes";
import loanRoutes from "./loanRoutes";

export function registerRoutes(app: Express) {
  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);
  app.use("/book", bookRoutes);
  app.use("/card", cardRoutes);
  app.use("/loan", loanRoutes);
}
