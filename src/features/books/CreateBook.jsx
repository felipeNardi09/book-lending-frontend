import { useForm } from "react-hook-form";
import FormField from "../../components/FormField.jsx";
import Button from "../../components/Button.jsx";
import { useCreateBook } from "./useCreateBook.js";
import SmallSpinner from "../../components/SmallSpinner.jsx";

export default function CreateBook() {
  const { register, handleSubmit } = useForm();

  const { addBook, isPending } = useCreateBook();

  return (
    <div className="col-start-1 col-end-2 ml-7 flex max-w-[90%] flex-col justify-center">
      <h2 className="mb-2 block text-center font-semibold underline">
        New book
      </h2>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit((data) => {
          console.log({
            ...data,
            numberOfCopies: Number(data.numberOfCopies),
            numOfPages: Number(data.numberOfPages),
          });

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
        <div className="mt-2 flex justify-center">
          <Button type="primary">
            <span>{!isPending ? "Add book" : <SmallSpinner />}</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
