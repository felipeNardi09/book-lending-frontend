/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export default function NavLink({ children, to, type, currentTab }) {
  const { pathname } = useLocation();

  const base = `${currentTab === pathname ? "disabled cursor-not-allowed bg-emerald-400 text-white" : "bg-slate-100 transition-all duration-300 hover:bg-emerald-500 hover:text-white"} cursor-pointer`;

  const types = {
    primary: `${base} px-3 py-1`,
    secondary: `${base} flex justify-center items-center py-2`,
    tertiary:
      "bg-emerald-400 px-2 py-1 text-white transition-all duration-200 hover:bg-emerald-500",
  };

  return (
    <Link className={types[type]} to={to}>
      {children}
    </Link>
  );
}
