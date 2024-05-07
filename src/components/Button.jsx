// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, disabled, type }) {
  const base =
    "min-w-[11em] md:min-w-[16em] cursor-pointer px-5 py-2.5 text-center text-sm font-medium transition-all duration-150";

  const styles = {
    default: base,
    logout: `${base} flex justify-center items-center py-4 border-slate-100 border-2 hover:bg-blue-500 hover:text-white`,
    bookCard: `${base} bg-blue-500 text-white hover:bg-blue-700 transition-all duration-200 active:ring-2 active:ring-red-300`,
    returnBook: `${base} bg-slate-500 text-white`,
    modal:
      "bg-none p-1 border transform translate-x-2 transition-all duration-100 absolute top-2 right-4 hover:bg-slate-300",
  };

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}
