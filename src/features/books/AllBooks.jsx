import { useBooks } from "./useBooks";
import BookCard from "./BookCard";
import Spinner from "../../components/Spinner";

export default function AllBooks() {
  const { data, error, isLoading } = useBooks();

  if (isLoading) return <Spinner />;

  if (error) return <h2>{error.message}</h2>;

  return (
    <div className="grid text-sm md:grid-cols-2 xl:grid-cols-3">
      {data?.data.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}
