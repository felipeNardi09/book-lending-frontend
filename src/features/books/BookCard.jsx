import { useState } from "react";
import Button from "../../components/Button";
import NavLink from "../../components/NavLink";
import SmallSpinner from "../../components/SmallSpinner";
import { useAuth } from "../../contexts/AuthContext";
import { useCreateLoan } from "../loans/useCreateLoan";
import Modal from "../../components/Modal";
import BookInfo from "./BookInfo";
import LoanRules from "../loans/LoanRules";

const styledTitle = "font-semibold text-md";

/* eslint-disable react/prop-types */
export default function BookCard({
  id,
  title,
  author,
  language,
  genre,
  synopsis,
  publisher,
  publicationDate,
  numberOfPages,
  numberOfCopies,
}) {
  const [openBookInfo, setOpenBookInfo] = useState(false);
  const [openLoanInfo, setOpenLoanInfo] = useState(false);
  const { borrowTheBook, isPending } = useCreateLoan(id);

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
        <NavLink type="toLoginPage" to="/login">
          Log in
        </NavLink>
      ) : (
        <>
          {!user.currentBorrowedBookId ? (
            <Button
              type="bookCard"
              onClick={() => {
                borrowTheBook();
              }}
              disable={isPending}
            >
              {!isPending ? "Borrow" : <SmallSpinner />}
            </Button>
          ) : (
            <Button
              type="returnBook"
              onClick={() => setOpenLoanInfo((curState) => !curState)}
            >
              About the loans
            </Button>
          )}
        </>
      )}
      <Button
        type="bookCard"
        onClick={() => setOpenBookInfo((curValue) => !curValue)}
      >
        More information
      </Button>
      {openBookInfo && (
        <Modal onClose={() => setOpenBookInfo(false)}>
          <BookInfo
            id={id}
            title={title}
            author={author}
            language={language}
            genre={genre}
            synopsis={synopsis}
            publisher={publisher}
            publicationDate={publicationDate}
            numberOfPages={numberOfPages}
            numberOfCopies={numberOfCopies}
          />
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
