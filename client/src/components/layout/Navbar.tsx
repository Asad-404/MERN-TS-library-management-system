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
    <nav className="w-full h-full bg-secondary text-text_primary flex items-center justify-between pl-8 md:pl-16 pr-5 md:pr-11">
      <Link
        to="/"
        className="w-full h-fit flex items-center justify-start text-text_primary"
      >
        <MdBook size="3rem" />
        <h1>My Library</h1>
      </Link>
      <div className="">
        <Link to="/catalog" className="">
          <h2>View Catalog</h2>
        </Link>
        <div className="">
          <input
            className=""
            placeholder="Search Catalog"
            onKeyDown={handleEnterKey}
            ref={searchRef}
            type="text"
          />
          <MdSearch
            onClick={handleSearchIconClick}
            size="2rem"
            className="cursor-pointer"
          />
        </div>
        {authState.loggedInUser ? (
          <div className="" onClick={navigateToProfile}>
            <h2>{authState.loggedInUser.firstName}'s Account</h2>
          </div>
        ) : (
          <div className="" onClick={toggleLogin}>
            <h2>Login</h2>
          </div>
        )}
      </div>
    </nav>
  );
}
