import Logo from "./Logo";
import Title from "./Title";

export default function Header() {
  return (
    <header className="my-1 flex items-center justify-center gap-1">
      <Logo />
      <Title />
    </header>
  );
}
