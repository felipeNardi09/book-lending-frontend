/* eslint-disable react/prop-types */
export default function TableHeaderCell({ children }) {
  return (
    <th scope="col" className="border-2 p-1">
      {children}
    </th>
  );
}
