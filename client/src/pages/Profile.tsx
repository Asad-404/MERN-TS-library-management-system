import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { fetchUser } from "../store/reducers/auth";
import UpdateUserForm from "../components/profile/UpdateUserForm";
import ProfileLoanHistory from "../components/profile/ProfileLoanHistory";

export default function ProfilePage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loggedInUser = useAppSelector((state) => state.auth.loggedInUser);
  const profileUser = useAppSelector((state) => state.auth.profileUser);

  useEffect(() => {
    if (userId) {
      if (loggedInUser?.id === userId || loggedInUser?.type === "EMPLOYEE") {
        dispatch(fetchUser({ userId, property: "profileUser" }));
      } else {
        navigate("/");
      }
    }
  }, [userId]);
  return (
    <div className="container mx-auto py-2 md:py-4 px-2 md:px-0">
      <h1>
        {profileUser?.firstName} {profileUser?.lastName}'s Profile
      </h1>
      <div className="h-fit w-full flex flex-col md:flex-row gap-2 md:gap-4 md:justify-between pt-4">
        <div className="w-full md:w-[40%] h-full bg-bg_secondary rounded-xl shadow-custom p-4 flex flex-col items-center">
          <UpdateUserForm />
        </div>
        <div className="w-full md:w-[59%] min-h-[64vh] overflow-hidden bg-bg_secondary rounded-xl shadow-custom p-4">
          {profileUser && <ProfileLoanHistory />}
        </div>
      </div>
    </div>
  );
}
