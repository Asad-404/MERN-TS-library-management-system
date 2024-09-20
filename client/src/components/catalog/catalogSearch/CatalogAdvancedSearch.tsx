import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CatalogAdvancedSearch() {
  const navigate = useNavigate();

  const isbnRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLInputElement>(null);

  const search = () => {
    let query = "";

    if (isbnRef && isbnRef.current && isbnRef.current.value !== "") {
      query += `?barcode=${isbnRef.current.value}`;
    }

    if (titleRef && titleRef.current && titleRef.current.value !== "") {
      query +=
        query === ""
          ? `?title=${titleRef.current.value}`
          : `&title=${titleRef.current.value}`;
    }

    if (authorRef && authorRef.current && authorRef.current.value !== "") {
      query +=
        query === ""
          ? `?author=${authorRef.current.value}`
          : `&author=${authorRef.current.value}`;
    }

    if (
      descriptionRef &&
      descriptionRef.current &&
      descriptionRef.current.value !== ""
    ) {
      query +=
        query === ""
          ? `?description=${descriptionRef.current.value}`
          : `&description=${descriptionRef.current.value}`;
    }

    if (subjectRef && subjectRef.current && subjectRef.current.value !== "") {
      query +=
        query === ""
          ? `?subject=${subjectRef.current.value}`
          : `&subject=${subjectRef.current.value}`;
    }

    if (genreRef && genreRef.current && genreRef.current.value !== "") {
      query +=
        query === ""
          ? `?genre=${genreRef.current.value}`
          : `&genre=${genreRef.current.value}`;
    }

    navigate(`/catalog${query}`);
  };
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center rounded-xl bg-bg_secondary shadow-custom p-4">
      <h2>Advanced Book Search</h2>
      <p>Fill in as many or little fields to narrow down your search results</p>
      <form className="w-full h-fit flex flex-col md:flex-row justify-evenly items-center my-4 gap-4">
        <div className="w-full md:w-1/6">
          <p>ISBN</p>
          <input
            type="text"
            className="w-full h-fit text-sm flex pt-0.5 pl-2 border-2 border-solid border-secondary rounded-lg focus:outline-none placeholder:text-text_secondary"
            placeholder="ISBN"
            ref={isbnRef}
          />
        </div>
        <div className="w-full md:w-1/6">
          <p>Title</p>
          <input
            type="text"
            className="w-full h-fit text-sm flex pt-0.5 pl-2 border-2 border-solid border-secondary rounded-lg focus:outline-none placeholder:text-text_secondary"
            placeholder="Title"
            ref={titleRef}
          />
        </div>
        <div className="w-full md:w-1/6">
          <p>Author</p>
          <input
            type="text"
            className="w-full h-fit text-sm flex pt-0.5 pl-2 border-2 border-solid border-secondary rounded-lg focus:outline-none placeholder:text-text_secondary"
            placeholder="Author"
            ref={authorRef}
          />
        </div>
        <div className="w-full md:w-1/6">
          <p>Description</p>
          <input
            type="text"
            className="w-full h-fit text-sm flex pt-0.5 pl-2 border-2 border-solid border-secondary rounded-lg focus:outline-none placeholder:text-text_secondary"
            placeholder="Description"
            ref={descriptionRef}
          />
        </div>
        <div className="w-full md:w-1/6">
          <p>Subject</p>
          <input
            type="text"
            className="w-full h-fit text-sm flex pt-0.5 pl-2 border-2 border-solid border-secondary rounded-lg focus:outline-none placeholder:text-text_secondary"
            placeholder="Subject"
            ref={subjectRef}
          />
        </div>
        <div className="w-full md:w-1/6">
          <p>Genre</p>
          <input
            type="text"
            className="w-full h-fit text-sm flex pt-0.5 pl-2 border-2 border-solid border-secondary rounded-lg focus:outline-none placeholder:text-text_secondary"
            placeholder="Genre"
            ref={genreRef}
          />
        </div>
      </form>
      <button
        className="w-1/4 h-8 border-none text-white cursor-pointer rounded-lg bg-secondary hover:bg-transparent hover:text-secondary hover:border-2 hover:border-solid hover:border-secondary"
        onClick={search}
      >
        Search
      </button>
    </div>
  );
}
