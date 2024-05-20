/* eslint-disable react/prop-types */
export default function TableRow({ children, id, className }) {
  return (
    <tr key={id} className={className}>
      {children}
    </tr>
  );
}
