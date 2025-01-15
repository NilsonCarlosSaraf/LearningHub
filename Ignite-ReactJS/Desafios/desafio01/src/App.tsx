import { useState } from "react";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <Body tasks={tasks} />
    </div>
  );
}

export default App;
