import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { fetchUser } from "../store/reducers/auth";
import UpdateUserForm from "../components/profile/UpdateUserForm";

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
    <div className="container mx-auto p-4 md:p-8">
      <h1>
        {profileUser?.firstName} {profileUser?.lastName}'s Profile
      </h1>
      <div className="h-fit w-full flex flex-col md:flex-row gap-3 md:justify-between pt-5">
        <div className="w-full md:w-[40%] h-full bg-bg_secondary rounded-xl shadow-custom p-4 flex flex-col items-center">
          <UpdateUserForm />
        </div>
        <div className="w-full md:w-[59%] min-h-[64vh] overflow-hidden bg-bg_secondary rounded-xl shadow-custom p-4">
          HELLO
        </div>
      </div>
    </div>
  );
}
