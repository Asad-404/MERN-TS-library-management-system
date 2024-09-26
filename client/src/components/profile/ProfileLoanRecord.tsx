import { Loan } from "../../models/Loan";

interface ProfileLoanRecordProps {
  record: Loan;
}

export default function ProfileLoanRecord({ record }: ProfileLoanRecordProps) {
  return (
    <div className="w-full h-fit py-1.5 border-b border-solid border-[rgba(0,0,0,0.2)]">
      <h4>Title: {record.item}</h4>
      <h4>Status: {record.status === "AVAILABLE" ? "RETURNED" : "LOANED"}</h4>
      <p>Loan Date: {new Date(record.loanedDate).toDateString()}</p>
      <p>Return By Date: {new Date(record.dueDate).toDateString()}</p>
      {record.returnedDate && (
        <p>Date Returned: {new Date(record.returnedDate).toDateString()}</p>
      )}
    </div>
  );
}
