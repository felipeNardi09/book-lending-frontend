import AllTheLoans from "../features/loans/AllTheLoans";
import CurrentBorrowedBookStatus from "../features/loans/CurrentBorrowedBookStatus";

export default function LoggedUserInformation() {
  return (
    <div className="grid max-h-dvh w-full grid-rows-[1.2fr_6fr] gap-4">
      <CurrentBorrowedBookStatus />
      <AllTheLoans />
    </div>
  );
}
