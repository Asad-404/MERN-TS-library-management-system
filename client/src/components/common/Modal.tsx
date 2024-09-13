interface ModalProps {
  toggleModal: () => void;
  content: JSX.Element;
}

export default function Modal({ content, toggleModal }: ModalProps) {
  return (
    <div className="z-[1] bg-black/20 w-full h-full absolute top-0 left-0">
      <div className="z-[5] w-2/3 md:w-1/3 h-fit flex flex-col items-center justify-start rounded-2xl shadow-custom bg-bg_primary sticky top-1/2 left-1/3 md:left-1/2 -translate-x-1/3 md:-translate-x-1/2 -translate-y-1/3 md:-translate-y-1/2 px-2 md:px-4 pb-2 md:pb-4">
        <h5 className="self-start cursor-pointer" onClick={toggleModal}>
          x
        </h5>
        {content}
      </div>
    </div>
  );
}
