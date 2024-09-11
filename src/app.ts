import cors from "cors";
import express from "express";
import { dbConfig } from "./config/dbConfig";
import errorHandler from "./middlewares/errorHandler";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

// DB Connection
mongoose
  .connect(dbConfig.url, {
    w: "majority",
    retryWrites: true,
    authMechanism: "DEFAULT",
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error in Database connection", err));

mongoose.connection.on("disconnected", () => {
  console.log("Database DisConnected");
});

// Define your routes here

// Use the error handler middleware
app.use(errorHandler);

export default app;
