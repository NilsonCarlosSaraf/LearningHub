import { Input } from "./components/Input";
import { Logo } from "./components/Logo";

export function Header() {
  return (
    <header className="bg-gray700 absolute h-60 flex flex-col items-center justify-end w-full">
      <Logo />
      <Input />
    </header>
  );
}
