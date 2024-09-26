import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { User } from "../../models/User";
import { MdCreate } from "react-icons/md";
import { resetUser, updateUser } from "../../store/reducers/auth";

export default function UpdateUserForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userState = useAppSelector((state) => state.auth);

  const [displayUpdate, setDisplayUpdate] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();

  const updateUserState = (e: ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
      setDisplayUpdate(true);
    }
  };

  const submitUpdatedUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (user && user.email && user.firstName && user.lastName) {
      dispatch(updateUser(user));
    }
    setDisplayUpdate(false);
  };

  const logout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem("userId");
    dispatch(resetUser("loggedInUser"));
    dispatch(resetUser("profileUser"));
    navigate("/");
  };

  useEffect(() => {
    if (userState.profileUser) {
      setUser(JSON.parse(JSON.stringify(userState.profileUser)));
    }
  }, [userState.profileUser?.id]);

  return (
    <form className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-fit mb-4 relative">
        <p>First Name:</p>
        <input
          type="text"
          name="firstName"
          value={user?.firstName}
          onChange={updateUserState}
          disabled={userState.loggedInUser?.id !== userState.profileUser?.id}
          className="h-8 w-full text-2xl bg-bg_secondary border-none disabled:text-text_primary focus:outline-none"
        />
        {userState.loggedInUser?.id === userState.profileUser?.id && (
          <MdCreate className="top-[60%] absolute right-0" />
        )}
      </div>
      <div className="w-full h-fit mb-4 relative">
        <p>Last Name:</p>
        <input
          type="text"
          name="lastName"
          value={user?.lastName}
          onChange={updateUserState}
          disabled={userState.loggedInUser?.id !== userState.profileUser?.id}
          className="h-8 w-full text-2xl bg-bg_secondary border-none disabled:text-text_primary focus:outline-none"
        />
        {userState.loggedInUser?.id === userState.profileUser?.id && (
          <MdCreate className="top-[60%] absolute right-0" />
        )}
      </div>
      <div className="w-full h-fit mb-4 relative">
        <p>Email:</p>
        <input
          type="email"
          name="email"
          value={user?.email}
          onChange={updateUserState}
          disabled={userState.loggedInUser?.id !== userState.profileUser?.id}
          className="h-8 w-full text-2xl bg-bg_secondary border-none disabled:text-text_primary focus:outline-none"
        />
        {userState.loggedInUser?.id === userState.profileUser?.id && (
          <MdCreate className="top-[60%] absolute right-0" />
        )}
      </div>
      {displayUpdate ? (
        <button
          className="profile-button w-[80%] h-10 text-white text-xl rounded-xl border-none bg-secondary mt-4 hover:bg-white hover:text-secondary hover:cursor-pointer hover:border-2 hover:border-solid hover:border-secondary"
          onClick={submitUpdatedUser}
        >
          Update Profile
        </button>
      ) : (
        <></>
      )}
      {userState.loggedInUser?.id === userState.profileUser?.id ? (
        <button
          className="profile-button w-[80%] h-10 text-white text-xl rounded-xl border-none bg-secondary mt-4 hover:bg-white hover:text-secondary hover:cursor-pointer hover:border-2 hover:border-solid hover:border-secondary"
          onClick={logout}
        >
          Logout of Account
        </button>
      ) : (
        <></>
      )}
    </form>
  );
}
