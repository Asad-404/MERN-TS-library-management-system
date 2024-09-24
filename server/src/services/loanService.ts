import LoanDao, { ILoanModel } from "../daos/LoanDao";
import { ILoan } from "../models/Loan";
import { LoanDoesNotExistError } from "../utils/libraryErrors";
import { findBookById, modifyBook } from "./bookService";

export async function generateRecord(record: ILoan): Promise<ILoanModel> {
  try {
    let createdRecord = new LoanDao(record);
    createdRecord = await createdRecord.save();
    let book = await findBookById(record.item);
    let records = book.records;

    records = [createdRecord, ...records];
    book.records = records;

    await modifyBook(book);
    return createdRecord;
  } catch (error) {
    throw error;
  }
}

export async function modifyRecord(record: ILoanModel): Promise<ILoanModel> {
  try {
    const updatedRecord = await LoanDao.findOneAndUpdate(
      { _id: record.id },
      record,
      { new: true }
    );

    if (updatedRecord) {
      let book = await findBookById(record.item);
      let records = book.records;

      records[0] = updatedRecord;
      book.records = records;

      await modifyBook(book);
      return updatedRecord;
    }
    throw new LoanDoesNotExistError("The record does not exist");
  } catch (error) {
    throw error;
  }
}

export async function findAllRecords(): Promise<ILoanModel[]> {
  try {
    return await LoanDao.find();
  } catch (error) {
    throw error;
  }
}

export async function queryRecords(params: {
  property: string;
  value: string | Date;
}): Promise<ILoanModel[]> {
  try {
    return await LoanDao.find({ [params.property]: params.value })
      .populate("item")
      .sort("-loanedDate");
  } catch (error) {
    throw error;
  }
}
