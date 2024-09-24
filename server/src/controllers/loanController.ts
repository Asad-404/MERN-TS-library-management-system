import { Request, Response } from "express";
import {
  findAllRecords,
  generateRecord,
  modifyRecord,
  queryRecords,
} from "../services/loanService";
import { LoanDoesNotExistError } from "../utils/libraryErrors";

async function createRecord(req: Request, res: Response) {
  const record = req.body;

  try {
    const data = await generateRecord(record);
    res.status(201).json({ message: "New record generated", data });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
}

async function updateRecord(req: Request, res: Response) {
  const record = req.body;

  try {
    const data = await modifyRecord(record);
    res.status(200).json({ message: "Record updated successfully", data });
  } catch (error) {
    if (error instanceof LoanDoesNotExistError) {
      res
        .status(404)
        .json({ message: "Unable to modify record", error: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong", error });
    }
  }
}

async function getAllRecords(req: Request, res: Response) {
  try {
    const data = await findAllRecords();
    res.status(200).json({ message: "Retrieve all records", data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to retrieve records at this time", error });
  }
}

async function getRecordByProperty(req: Request, res: Response) {
  const param = req.body;

  try {
    const data = await queryRecords(param);
    res.status(200).json({ message: "Retrieve records from your query", data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to retrieve records at this time", error });
  }
}

export default {
  createRecord,
  updateRecord,
  getAllRecords,
  getRecordByProperty,
};
