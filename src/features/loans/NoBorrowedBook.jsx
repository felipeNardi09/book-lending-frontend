import NavLink from "../../components/NavLink";
import { useAuth } from "../../contexts/AuthContext";

export default function NoBorrowedBook() {
  const { user } = useAuth();

  return (
    <>
      {user?._loanId.length !== 0 && (
        <div className="flex items-center gap-4 border border-blue-500 px-3 py-2">
          <p>Borrow a book</p>
          <NavLink type="tertiary" to="/availableBooks">
            See available books
          </NavLink>
        </div>
      )}
    </>
  );
}
