import { useBooks } from "./useBooks";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import { MdDeleteOutline } from "react-icons/md";
import { formatDate } from "../../utils/helpers";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableBody from "../../components/TableBody";
import TableHead from "../../components/TableHead";
import TableHeaderCell from "../../components/TableHeaderCell";
import TableDataCell from "../../components/TableDataCell";
import { useDeleteBook } from "./useDeleteBook";

export default function BooksTable() {
  const { data, error, isPending } = useBooks();
  const { mutate: deleteBookById } = useDeleteBook();

  if (error)
    return (
      <div>
        <h2>{error.message}</h2>
      </div>
    );

  return (
    <div className="mb-4 px-4">
      {!isPending ? (
        <Table>
          <caption className="m-2 text-lg">Books</caption>
          <TableHead>
            <TableRow className="dark:bg-gray-600 dark:text-white">
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Author</TableHeaderCell>
              <TableHeaderCell>Genre</TableHeaderCell>
              <TableHeaderCell>Available copies</TableHeaderCell>
              <TableHeaderCell>Created at</TableHeaderCell>
              <TableHeaderCell>Delete</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((book) => (
              <TableRow
                className="border-2 transition-all duration-200 hover:bg-emerald-300 hover:underline"
                key={book._id}
              >
                <TableDataCell>{book.title}</TableDataCell>
                <TableDataCell>{book.author}</TableDataCell>
                <TableDataCell>{book.genre}</TableDataCell>
                <TableDataCell>{book.numberOfCopies}</TableDataCell>
                <TableDataCell>{formatDate(book.createdAt)}</TableDataCell>
                <TableDataCell>
                  <Button onClick={() => deleteBookById(book._id)} type="table">
                    <MdDeleteOutline />
                  </Button>
                </TableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
