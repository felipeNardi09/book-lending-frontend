// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, disabled, type }) {
  const base =
    "min-w-[11em] md:min-w-[16em] cursor-pointer text-center text-md font-medium transition-all duration-150";

  const styles = {
    primary: `${base} flex justify-center items-center py-2 text-white bg-emerald-400 hover:bg-emerald-500`,
    modal:
      "bg-none p-1 border transform translate-x-2 transition-all duration-100 absolute top-2 right-4 hover:bg-slate-300",
  };

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}
