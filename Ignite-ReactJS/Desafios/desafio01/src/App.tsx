import { useState } from "react";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
    tasks.filter((task) => task);
  }

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <Body tasks={tasks} />
    </div>
  );
}

export default App;
