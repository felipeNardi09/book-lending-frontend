import NavLink from "../../components/NavLink";
import SmallSpinner from "../../components/SmallSpinner";
import LoanCard from "./LoanCard";
import { useGetLoansByUser } from "./useGetLoansByUser";

export default function AllTheLoans() {
  const { data: loans, error, isPending } = useGetLoansByUser();

  if (isPending) return <SmallSpinner />;

  if (error)
    return (
      <div>
        <h2>{error.message}</h2>
      </div>
    );

  return (
    <div className="overflow-scroll">
      {loans.total > 0 ? (
        <div className="flex flex-col">
          {loans?.data.map((loan) => (
            <LoanCard key={loan._id} loan={loan} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2>{loans.data}</h2>
          <NavLink to="/availableBooks" type="toLoginPage">
            Borrow a book
          </NavLink>
        </div>
      )}
    </div>
  );
}
