/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/helpers.js";
export default function LoanCard({ loan }) {
  const returnDate = new Date(loan.returnDate).getTime();
  const now = new Date().getTime();

  const didTheLoanPassTheReturnDate = now > returnDate && !loan.hasBeenReturned;

  return (
    <div
      className={`${loan.hasBeenReturned ? "bg-emerald-200" : didTheLoanPassTheReturnDate ? "bg-red-300" : "bg-orange-200"} flex flex-col items-center gap-1 border-b border-black text-center opacity-90`}
    >
      <h3 className="text-lg font-semibold underline">
        {loan._borrowedBookTitle}
      </h3>
      <p className="text-sm">
        Borrow date:{" "}
        <span className="inline-block text-sm">
          {formatDate(loan.rentalDate)}
        </span>
      </p>
      <p className="text-sm">
        Return date:{" "}
        <span className="inline-block text-sm">
          {formatDate(loan.returnDate)}
        </span>
      </p>
      {loan.hasBeenReturned ? (
        <p>
          You returned{" "}
          <span>
            {loan._borrowedBookTitle} at {formatDate(loan.retrieveDate)}
          </span>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
