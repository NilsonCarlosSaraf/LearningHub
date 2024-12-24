import rocket from "../../../imgs/rocket.png";
import todo from "../../../imgs/todo.png";

export function Logo() {
  return (
    <div className="flex gap-x-2 items-center">
      <img src={rocket} alt="rocketImage" />
      <img src={todo} alt="todoImage" />
    </div>
  );
}
