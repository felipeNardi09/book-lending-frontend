export default function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-black bg-blue-500 text-white">
      <h2>
        Desgined by Felipe Nardi. Check out my linkedin page:{" "}
        <a
          className="inline-block rounded  border-4 border-blue-500  bg-white px-2 py-1 text-blue-500 transition-all duration-200  hover:border-yellow-400"
          target="_blank"
          href="https://www.linkedin.com/in/felipe-nardi/"
        >
          linkedin.com/in/felipe-nardi
        </a>
      </h2>
    </footer>
  );
}
