import { Input } from "./components/Input";
import rocket from "../../imgs/rocket.png";
import todo from "../../imgs/todo.png";

export function Header() {
  return (
    <header className="bg-gray700 absolute h-60 flex flex-col items-center justify-end w-full">
      <div className="flex gap-x-2 items-center">
        <img src={rocket} alt="rocketImage" />
        <img src={todo} alt="todoImage" />
      </div>
      <Input />
    </header>
  );
}
