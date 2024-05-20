/* eslint-disable react/prop-types */
export default function Table({ children }) {
  return (
    <table className="w-full text-center text-sm font-semibold text-gray-900 rtl:text-right dark:text-gray-700">
      {children}
    </table>
  );
}
