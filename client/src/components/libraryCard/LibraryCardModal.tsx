import { useAppDispatch } from "../../store/hooks";
import { setDisplayLibraryCard } from "../../store/reducers/settings";
import Modal from "../common/Modal";
import RegisterLibraryCardForm from "./RegisterLibraryCardForm";

export default function LibraryCardModal() {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(setDisplayLibraryCard(false));
  };
  return (
    <Modal content={<RegisterLibraryCardForm />} toggleModal={closeModal} />
  );
}
