import { useNavigate } from "react-router-dom";
import { Loan } from "../../../../models/Loan";
import clsx from "clsx";

interface BookHistoryItemProps {
  record: Loan;
}

export default function BookHistoryItem({ record }: BookHistoryItemProps) {
  const navigate = useNavigate();

  const visitProfile = () => {
    navigate(`/profile/${record.patron}`);
  };

  return (
    <div className="w-full h-fit border-y border-solid border-[rgba(0,0,0,0.1)] flex items-center justify-between p-2">
      <h4>
        Status:{" "}
        <span
          className={clsx(
            { "text-secondary": record.status === "AVAILABLE" },
            { "text-error": record.status !== "AVAILABLE" }
          )}
        >
          {record.status}
        </span>
      </h4>
      <div className="w-1/2 h-fit flex flex-col justify-center items-center">
        <p className="cursor-pointer" onClick={visitProfile}>
          Patron: {record.patron}
        </p>
        <p>Loan Date: {new Date(record.loanedDate).toDateString()}</p>
        {record.status === "AVAILABLE" && record.returnedDate && (
          <p>Return Date: {new Date(record.returnedDate).toDateString()}</p>
        )}
      </div>
      <div className="w-1/2 h-fit flex flex-col justify-center items-center">
        <p>Loaner: {record.employeeOut}</p>
        <p>Return By Date: {new Date(record.dueDate).toDateString()}</p>
        {record.status === "AVAILABLE" && record.employeeIn && (
          <p>Returner: {record.employeeIn}</p>
        )}
      </div>
    </div>
  );
}
