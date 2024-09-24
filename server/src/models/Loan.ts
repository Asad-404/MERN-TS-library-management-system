export interface ILoan {
  status: "AVAILABLE" | "LOANED";
  loanedDate: Date;
  dueDate: Date;
  returnedDate?: string;
  patron: string;
  employeeOut: string;
  employeeIn?: string;
  item: string;
}
