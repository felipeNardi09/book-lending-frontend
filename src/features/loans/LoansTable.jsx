import { useAllLoans } from "./useAllLoans";
import Table from "../../components/Table";
import TableBody from "../../components/TableBody";
import TableDataCell from "../../components/TableDataCell";
import TableHead from "../../components/TableHead";
import TableHeaderCell from "../../components/TableHeaderCell";
import TableRow from "../../components/TableRow";
import Spinner from "../../components/Spinner";
import { formatDate } from "../../utils/helpers";

export default function LoansTable() {
  const { data, error, isPending } = useAllLoans();

  if (error)
    return (
      <div>
        <h2>{error.message}</h2>
      </div>
    );

  return (
    <div className="p-4">
      {!isPending ? (
        <Table>
          <caption className="m-2 text-lg">Loans</caption>
          <TableHead>
            <TableRow className="dark:bg-gray-600 dark:text-white">
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Borrower ID</TableHeaderCell>
              <TableHeaderCell>Book ID</TableHeaderCell>
              <TableHeaderCell>Book Title</TableHeaderCell>
              <TableHeaderCell>Has been returned</TableHeaderCell>
              <TableHeaderCell>Loan data</TableHeaderCell>
              <TableHeaderCell>Return date</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((loan) => (
              <TableRow
                className="border-2 transition-all duration-200 hover:bg-emerald-300 hover:underline"
                key={loan._id}
              >
                <TableDataCell>{loan._id}</TableDataCell>
                <TableDataCell>{loan._borrowerId}</TableDataCell>
                <TableDataCell>{loan._borrowedBookId}</TableDataCell>
                <TableDataCell>{loan._borrowedBookTitle}</TableDataCell>
                <TableDataCell>
                  {loan.hasBeenReturned ? (
                    <span className="font-bold text-green-500">Yes</span>
                  ) : (
                    <span className="font-bold text-red-500">No</span>
                  )}
                </TableDataCell>
                <TableDataCell>{formatDate(loan.rentalDate)}</TableDataCell>
                <TableDataCell>{formatDate(loan.returnDate)}</TableDataCell>
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
