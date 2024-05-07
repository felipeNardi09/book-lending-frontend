import { CurrentBorrowedBook } from "./CurrentBorrowedBook";
import NoBorrowedBook from "./NoBorrowedBook";
import { useAuth } from "../../contexts/AuthContext";

export default function CurrentBorrowedBookStatus() {
  const { user } = useAuth();

  return (
    <div className="row-start-1 row-end-2 mt-2 flex flex-col items-center justify-center gap-1 text-center">
      {!user?.currentBorrowedBookId ? (
        <NoBorrowedBook />
      ) : (
        <CurrentBorrowedBook
          currentBorrowedBookId={user?.currentBorrowedBookId}
        />
      )}
    </div>
  );
}
