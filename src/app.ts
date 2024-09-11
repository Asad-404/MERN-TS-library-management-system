import express from "express";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

// Define your routes here

// Use the error handler middleware
app.use(errorHandler);

export default app;
