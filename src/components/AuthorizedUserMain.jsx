// eslint-disable-next-line react/prop-types
export default function AuthorizedUserMain({ children }) {
  return (
    <div className="col-start-2 col-end-4 row-start-1 row-end-4 grid place-items-center overflow-scroll">
      {children}
    </div>
  );
}
