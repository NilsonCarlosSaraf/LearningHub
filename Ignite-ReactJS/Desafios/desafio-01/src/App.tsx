import { useState } from "react";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleDeleteTask(taskToDelete: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  }

  return (
    <>
      <Header tasks={tasks} setTasks={setTasks} />
      <Body tasks={tasks} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default App;
