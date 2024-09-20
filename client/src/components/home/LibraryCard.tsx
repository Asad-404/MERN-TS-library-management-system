import libraryCard from "../../../public/librarycard.png";
import { useAppDispatch } from "../../store/hooks";
import { setDisplayLibraryCard } from "../../store/reducers/settings";

export default function LibraryCard() {
  const dispatch = useAppDispatch();

  const handleDisplayModal = () => {
    dispatch(setDisplayLibraryCard(true));
  };
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center rounded-xl p-4 shadow-custom bg-bg_secondary mt-4">
      <h2>Get A Library Card</h2>
      <img className="w-1/2 mb-4" src={libraryCard} alt="Library-card-image" />
      <p>
        Learn how to get your own library card{" "}
        <span
          className="hover:text-primary hover:underline hover:cursor-pointer"
          onClick={handleDisplayModal}
        >
          here.
        </span>
      </p>
    </div>
  );
}
