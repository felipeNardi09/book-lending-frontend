/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export default function NavLink({ children, to, type, currentTab }) {
  const { pathname } = useLocation();

  const base = `${currentTab === pathname ? "disabled cursor-not-allowed bg-blue-600 text-white" : "bg-slate-100 transition-all duration-300 hover:bg-blue-600 hover:text-white active:bg-blue-100"}`;

  const types = {
    default: `${base} px-2 py-1`,
    toLoginPage:
      "`min-w-[11em] inline-block md:min-w-[16em] cursor-pointer px-5 py-2.5 text-center text-sm font-medium transition-all duration-150 bg-blue-500 text-white hover:bg-blue-700 transition-all duration-200 active:ring-2 active:ring-red-300`",
    sidebar: `${base} flex justify-center items-center p-4`,
    navbar: `${base} flex justify-center items-center px-5 py-1`,
  };

  return (
    <Link className={types[type]} to={to}>
      {children}
    </Link>
  );
}
