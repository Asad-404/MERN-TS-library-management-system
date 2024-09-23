import mongoose, { Document, Schema } from "mongoose";
import { ILibraryCard } from "../models/LibraryCard";

export interface ILibraryCardModel extends ILibraryCard, Document {}

const LibraryCardSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "User",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

LibraryCardSchema.methods.toJSON = function () {
  const card = this.toObject();
  card.id = card._id;
  delete card._id;
  delete card.createdAt;
  delete card.updatedAt;

  return card;
};

export default mongoose.model<ILibraryCardModel>(
  "LibraryCard",
  LibraryCardSchema
);
