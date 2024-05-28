/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import FormField from "../../components/FormField.jsx";
import Button from "../../components/Button.jsx";
import { useCreateBook } from "./useCreateBook.js";
import SmallSpinner from "../../components/SmallSpinner.jsx";

export default function CreateBook({ setToggleModal }) {
  const { register, handleSubmit } = useForm();

  const { addBook, error, isPending } = useCreateBook();

  return (
    <div>
      <h2 className="m-2 text-center font-semibold">New book</h2>
      <form
        className="grid grid-cols-2 grid-rows-4"
        onSubmit={handleSubmit((data) => {
          setToggleModal(false);

          return addBook({
            ...data,
            numberOfCopies: Number(data.numberOfCopies),
            numberOfPages: Number(data.numberOfPages),
          });
        })}
      >
        <FormField
          htmlTag="input"
          register={register}
          htmlFor="title"
          type="text"
          id="title"
          label="Title"
          placeholder="Title"
        />
        <FormField
          htmlTag="input"
          register={register}
          htmlFor="genre"
          type="text"
          id="genre"
          label="Genre"
          placeholder="Genre"
        />

        <FormField
          htmlTag="input"
          register={register}
          htmlFor="author"
          type="text"
          id="author"
          label="Author"
          placeholder="Author"
        />
        <FormField
          htmlTag="input"
          register={register}
          htmlFor="numberOfPages"
          type="number"
          id="numberOfPages"
          label="Pages"
          placeholder="Number of pages"
        />

        <FormField
          htmlTag="input"
          register={register}
          htmlFor="language"
          type="text"
          id="language"
          label="Language"
          placeholder="Language"
        />
        <FormField
          htmlTag="input"
          register={register}
          htmlFor="publisher"
          type="text"
          id="publisher"
          label="Publisher"
          placeholder="Publisher"
        />

        <FormField
          htmlTag="input"
          register={register}
          htmlFor="publicationDate"
          type="text"
          id="publicationDate"
          label="Publication date"
          placeholder="yyyy-mm-dd format"
        />
        <FormField
          htmlTag="input"
          register={register}
          htmlFor="numberOfCopies"
          type="number"
          id="numberOfCopies"
          label="Copies"
          placeholder="Number of copies"
        />

        <FormField
          register={register}
          htmlFor="synopsis"
          htmlTag="textArea"
          type="textArena"
          id="synopsis"
          label="Synopsis"
        />

        <div className="flex items-center justify-center">
          <Button type="secondary">
            <span>{!isPending ? "Add book" : <SmallSpinner />}</span>
          </Button>
        </div>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
}
