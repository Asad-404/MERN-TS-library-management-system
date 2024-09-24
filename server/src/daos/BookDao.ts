import mongoose, { Document, Schema } from "mongoose";
import { IBook } from "../models/Book";
import { LoanSchema } from "./LoanDao";

export interface IBookModel extends IBook, Document {}
const BookSchema = new Schema(
  {
    barcode: {
      type: String,
      required: true,
      unique: true,
    },
    cover: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    subjects: {
      type: [String],
      required: true,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    records: [LoanSchema],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

BookSchema.methods.toJSON = function () {
  const book = this.toObject();
  book.id = book._id;
  delete book._id;
  delete book.createdAt;
  delete book.updatedAt;

  return book;
};

export default mongoose.model<IBookModel>("Book", BookSchema);
