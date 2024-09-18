import { KeyboardEvent, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Link, useNavigate } from "react-router-dom";
import { setDisplayLoginModal } from "../../store/reducers/settings";
import { MdBook, MdSearch } from "react-icons/md";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);

  const searchRef = useRef<HTMLInputElement>(null);

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      searchRef &&
      searchRef.current &&
      searchRef.current.value.length > 0
    ) {
      navigate(
        `/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`
      );
      searchRef.current.value = "";
    }
  };

  const handleSearchIconClick = () => {
    if (searchRef && searchRef.current && searchRef.current.value.length > 0) {
      navigate(
        `/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`
      );
      searchRef.current.value = "";
    }
  };

  const navigateToProfile = () => {
    if (authState.loggedInUser)
      navigate(`/profile/${authState.loggedInUser.id}`);
  };

  const toggleLogin = () => {
    dispatch(setDisplayLoginModal(true));
  };
  return (
    <nav className="w-full h-full bg-secondary text-text_primary flex items-center justify-between p-2 md:p-8">
      <div>
        <Link to="/" className="w-full h-fit flex items-center justify-start">
          <MdBook size="1.75rem" className="text-white" />
          <p className="hidden text-white font-semibold text-2xl md:block">
            My Library
          </p>
        </Link>
      </div>
      <div className="w-fit md:w-[75%] h-fit flex justify-end items-center">
        <Link
          to="/catalog"
          className="h-full w-fit text-white font-semibold rounded-xl cursor-pointer p-2 mr-4 hover:bg-bg_primary hover:text-secondary no-underline"
        >
          <p>Catalog</p>
        </Link>
        <div className="flex justify-center items-center border-2 border-solid border-white rounded-3xl px-2 py-1">
          <input
            className="w-full bg-transparent border-none font-normal text-white placeholder:text-white opacity-100 focus:outline-none"
            placeholder="Search Catalog"
            onKeyDown={handleEnterKey}
            ref={searchRef}
            type="text"
          />
          <MdSearch
            size="1.5rem"
            onClick={handleSearchIconClick}
            className="cursor-pointer text-white"
          />
        </div>
        {authState.loggedInUser ? (
          <div
            onClick={navigateToProfile}
            className="h-full w-fit p-3 text-text_primary rounded-xl cursor-pointer mr-4 hover:bg-bg_primary hover:text-text_secondary"
          >
            <h2>{authState.loggedInUser.firstName}'s Account</h2>
          </div>
        ) : (
          <div
            className="h-full w-fit p-2 text-white rounded-xl cursor-pointer ml-4 hover:bg-bg_primary hover:text-secondary"
            onClick={toggleLogin}
          >
            <p>Login</p>
          </div>
        )}
      </div>
    </nav>
  );
}
