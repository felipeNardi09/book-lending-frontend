import { useBooks } from "./useBooks";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { formatDate } from "../../utils/helpers";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableBody from "../../components/TableBody";
import TableHead from "../../components/TableHead";
import TableHeaderCell from "../../components/TableHeaderCell";
import TableDataCell from "../../components/TableDataCell";

export default function BooksTable() {
  const { data, error, isLoading } = useBooks();

  if (error)
    return (
      <div>
        <h2>{error.message}</h2>
      </div>
    );

  return (
    <div className="col-start-2 col-end-4 p-4">
      {!isLoading ? (
        <Table>
          <caption>Books</caption>
          <TableHead>
            <TableRow className="dark:bg-gray-600 dark:text-white">
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Author</TableHeaderCell>
              <TableHeaderCell>Genre</TableHeaderCell>
              <TableHeaderCell>Available copies</TableHeaderCell>
              <TableHeaderCell>Created at</TableHeaderCell>
              <TableHeaderCell>Edit</TableHeaderCell>
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
                  <Button type="table">
                    <FiEdit2 />
                  </Button>
                </TableDataCell>
                <TableDataCell>
                  <Button type="table">
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

/*  return (
    <div className="col-start-2 col-end-4 grid grid-rows-[2em_28em] px-4">
      {!isLoading ? (
        <>
          <div className="text-center font-semibold underline">
            <h2>Books</h2>
          </div>

          <table className="block w-full overflow-scroll border text-center text-sm text-gray-900 rtl:text-right dark:text-gray-700">
            <thead className="dark:white sticky top-0 bg-emerald-400 text-xs uppercase text-gray-900 dark:text-gray-900">
              <tr>
                <th scope="col" className={tableRow}>
                  Title
                </th>
                <th scope="col" className={tableRow}>
                  Author
                </th>
                <th scope="col" className={tableRow}>
                  Genre
                </th>
                <th scope="col" className={tableRow}>
                  Available copies
                </th>
                <th scope="col" className={tableRow}>
                  Created at
                </th>
                <th scope="col" className={tableRow}>
                  Edit
                </th>
                <th scope="col" className={tableRow}>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((book) => (
                <tr
                  className="border-b bg-white dark:border-gray-700 "
                  key={book._id}
                >
                  <td className="font-semibold">{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.numberOfCopies}</td>
                  <td>{formatDate(book.createdAt)}</td>
                  <td>
                    <Button type="table">
                      <FiEdit2 />
                    </Button>
                  </td>
                  <td>
                    <Button type="table">
                      <MdDeleteOutline />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  ); */
