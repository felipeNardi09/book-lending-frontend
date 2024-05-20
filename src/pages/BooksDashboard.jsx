import CreateBook from "../features/books/CreateBook";
import BooksTable from "../features/books/BooksTable";

export default function BooksDashboard() {
  return (
    <div className="grid w-full grid-cols-[1fr_2fr_2fr]">
      <CreateBook />
      <BooksTable />
    </div>
  );
}
