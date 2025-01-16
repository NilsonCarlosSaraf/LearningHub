import { Input } from "./components/Input";
import { Logo } from "./components/Logo";

interface headerProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Header({ tasks, setTasks }: headerProps) {
  return (
    <header className="bg-gray700 h-60 flex flex-col items-center justify-end w-full">
      <Logo />
      <Input tasks={tasks} setTasks={setTasks} />
    </header>
  );
}
