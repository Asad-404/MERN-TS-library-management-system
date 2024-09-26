import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { Loan } from "../../models/Loan";
import axios from "axios";
import ProfileLoanRecord from "./ProfileLoanRecord";

export default function ProfileLoanHistory() {
  const user = useAppSelector((state) => state.auth.profileUser);

  const [records, setRecords] = useState<Loan[]>([]);

  const fetchRecordsForUser = async () => {
    if (user) {
      try {
        const res = await axios.post(`http://localhost:8000/loan/query`, {
          property: "patron",
          value: user.id,
        });

        const record = res.data.data;
        setRecords(record);
      } catch (error) {
        console.log("fetchRecordsForUser", error);
      }
    }
  };

  useEffect(() => {
    fetchRecordsForUser();
  }, [user]);
  return (
    <div className="w-full h-full overflow-y-auto">
      <h3 className="sticky top-0 bg-bg_secondary">
        {user?.firstName}'s Item Loan History:
      </h3>
      {records.map((record) => (
        <ProfileLoanRecord record={record} key={record._id} />
      ))}
    </div>
  );
}
