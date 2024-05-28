// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, disabled, type }) {
  const base =
    "min-w-[11em] md:min-w-[16em] cursor-pointer text-center text-md font-medium transition-all duration-150";

  const styles = {
    primary: `${base} flex justify-center items-center py-2 text-white bg-emerald-400 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-300`,
    modal:
      "bg-none p-1 border transform translate-x-2 transition-all duration-100 absolute top-2 right-4 hover:bg-slate-300",
    table:
      "p-2 rounded-full transition-all duration-200 bg-gray-200 hover:bg-orange-400 border-2 border-slate-200",
    secondary:
      "border-2 px-4 py-2 flex items-center justify-center transition-all duration-200 bg-blue-100 hover:border-emerald-400  gap-1 mt-2 font-bold hover:text-emerald-400",
  };

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}
