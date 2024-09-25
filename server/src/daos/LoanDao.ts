import mongoose, { Document, Schema } from "mongoose";
import { ILoan } from "../models/Loan";

export interface ILoanModel extends ILoan, Document {}

export const LoanSchema: Schema = new Schema(
  {
    status: { type: String, required: true },
    loanedDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    returnedDate: { type: Date, required: false },
    patron: { type: Schema.Types.ObjectId, required: true },
    employeeOut: { type: Schema.Types.ObjectId, required: true },
    employeeIn: { type: Schema.Types.ObjectId, required: false },
    item: { type: Schema.Types.ObjectId, required: true, ref: "Book" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

LoanSchema.methods.toJSON = function () {
  const loan = this.toObject();
  loan.id = loan._id;
  delete loan._id;
  return loan;
};

export default mongoose.model<ILoanModel>("Loan", LoanSchema);
