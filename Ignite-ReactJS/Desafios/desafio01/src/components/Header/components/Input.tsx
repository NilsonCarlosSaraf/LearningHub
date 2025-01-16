import { useState } from "react";

interface InputProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Input({ tasks, setTasks }: InputProps) {
  const [error, setError] = useState("");
  const [task, setTask] = useState("");

  function handleCreateTask() {
    if (task.trim() === "") {
      setError("O campo nao pode ficar vazio");

      return;
    }

    setError("");
    setTasks([...tasks, task]);
    setTask("");
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }
  return (
    <div>
      <div className="flex gap-x-4 relative -bottom-4">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="bg-gray500 h-8 rounded w-80 px-2 text-justify text-gray-100 placeholder:text-gray-400"
          onChange={handleInputChange}
          value={task}
        />
        <button
          className="bg-blueDark rounded w-20 h-8 text-white"
          onClick={handleCreateTask}
        >
          Criar
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
