import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getLibraryCard } from "../../store/reducers/auth";
import {
  setDisplayLibraryCard,
  setDisplayLoginModal,
} from "../../store/reducers/settings";

export default function RegisterLibraryCardForm() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.auth);

  const handleCreateLibraryCard = () => {
    if (userState.loggedInUser) {
      dispatch(getLibraryCard(userState.loggedInUser.id));
    }
  };

  const handleLoginClick = () => {
    dispatch(setDisplayLibraryCard(false));
    dispatch(setDisplayLoginModal(true));
  };
  return (
    <>
      {userState.loggedInUser ? (
        <div className="w-full h-fit flex flex-col items-center justify-center">
          <h3 className="mb-3 text-center">
            Welcome {userState.loggedInUser.firstName}{" "}
            {userState.loggedInUser.lastName}!
          </h3>
          <h5 className="mb-3 text-center">
            To sign up for a new library card, or you forget the ID number on
            your card, use the button below.
          </h5>
          {userState.libraryCard ? (
            <p className="mb-3 text-center">
              Your library card number: {userState.libraryCard}
            </p>
          ) : (
            <button
              className="w-1/2 h-12 text-2xl border-2 border-solid border-primary rounded-xl cursor-pointer bg-bg_secondary hover:text-primary hover:shadow-custom"
              onClick={handleCreateLibraryCard}
            >
              Get Library Card
            </button>
          )}
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col items-center justify-center">
          <h3 className="mb-3 text-center">
            You must be a member of the library to obtain a library card
          </h3>
          <h5 className="mb-3 text-center">
            Use the button below to login to your account or register for fee.
          </h5>
          <button
            className="w-1/2 h-12 text-2xl border-2 border-solid border-secondary rounded-xl cursor-pointer bg-bg_secondary hover:text-secondary hover:shadow-custom"
            onClick={handleLoginClick}
          >
            Login Here
          </button>
        </div>
      )}
    </>
  );
}
