import { useRetrieveBook } from "../loans/useRetrieveBook";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/Button";
import SmallSpinner from "../../components/SmallSpinner";
import { formatDate } from "../../utils/helpers";
import { useGetCurrentLoan } from "./useGetCurrentLoan";
export function CurrentBorrowedBook() {
  const { user } = useAuth();
  const { returnBook, isPending: returningBook } = useRetrieveBook(
    user?._currentLoanId,
  );

  const {
    data,
    error,
    isPending: loadingLoans,
  } = useGetCurrentLoan(user?._currentLoanId);

  if (loadingLoans) return <SmallSpinner />;

  if (error)
    return (
      <div>
        <h2>{error.message}</h2>
      </div>
    );

  const { data: loan } = data;

  return (
    <div>
      <div>
        <p>
          You are reading:{" "}
          <span className="font-semibold">{loan._borrowedBookTitle}</span>
        </p>
        <p>
          Return date: <span>{formatDate(loan.returnDate)}</span>
        </p>
      </div>
      <div>
        <Button type="primary" onClick={returnBook}>
          {!returningBook ? "Return the book" : <SmallSpinner />}
        </Button>
      </div>
    </div>
  );
}
