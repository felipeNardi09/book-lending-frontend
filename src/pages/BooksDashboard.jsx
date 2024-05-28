import BooksTable from "../features/books/BooksTable";
import AddBook from "../features/books/AddBook";

export default function BooksDashboard() {
  return (
    <>
      <AddBook />
      <BooksTable />
    </>
  );
}
