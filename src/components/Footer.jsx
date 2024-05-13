export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-slate-300 text-emerald-900">
      <h2>
        Desgined by Felipe Nardi. Check out my linkedin page:{" "}
        <a
          className="inline-block  rounded-full bg-yellow-300 px-2 py-1 text-emerald-900 transition-all duration-200 hover:bg-yellow-400"
          target="_blank"
          href="https://www.linkedin.com/in/felipe-nardi/"
        >
          linkedin.com/in/felipe-nardi
        </a>
      </h2>
    </footer>
  );
}
