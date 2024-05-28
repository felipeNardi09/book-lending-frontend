import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import { useCreateLoan } from "../loans/useCreateLoan";
import LoanRules from "../loans/LoanRules";

import Button from "../../components/Button";
import NavLink from "../../components/NavLink";
import SmallSpinner from "../../components/SmallSpinner";
import Modal from "../../components/Modal";
import BookInfo from "./BookInfo";

const styledTitle = "font-semibold text-md";

/* eslint-disable react/prop-types */
export default function BookCard({ book }) {
  const { _id, title, author, synopsis, numberOfCopies } = book;

  const [openBookInfo, setOpenBookInfo] = useState(false);
  const [openLoanInfo, setOpenLoanInfo] = useState(false);
  const { borrowTheBook, isPending } = useCreateLoan(_id);

  const { user } = useAuth();

  return (
    <div className="m-4 flex flex-col items-center justify-between gap-3 border border-slate-100 bg-slate-50 p-4 text-center">
      <h2 className="text-center text-lg font-semibold underline">{title}</h2>
      <p>
        <span className={styledTitle}>Author:</span> {author}
      </p>
      <p>
        <span className={styledTitle}>Synopsis:</span> {synopsis}
      </p>
      <p>Copies available: {numberOfCopies}</p>

      {!user ? (
        <NavLink type="tertiary" to="/login">
          Log in
        </NavLink>
      ) : (
        <>
          {!user.currentBorrowedBookId ? (
            <Button type="primary" onClick={borrowTheBook} disable={isPending}>
              {!isPending ? "Borrow" : <SmallSpinner />}
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => setOpenLoanInfo((curState) => !curState)}
            >
              About the loans
            </Button>
          )}
        </>
      )}
      <Button
        type="primary"
        onClick={() => setOpenBookInfo((curValue) => !curValue)}
      >
        More information
      </Button>
      {openBookInfo && (
        <Modal onClose={() => setOpenBookInfo(false)}>
          <BookInfo id={_id} book={book} />
        </Modal>
      )}
      {openLoanInfo && (
        <Modal onClose={() => setOpenLoanInfo(false)}>
          <LoanRules />
        </Modal>
      )}
    </div>
  );
}
