import { useState } from "react";
import CheckCircle from "./components/CheckCircle";
import { Trash } from "phosphor-react";

export function Card({ task }: { task: string }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked((state) => !state);
  }

  function handleDelete() {
    console.log("Deletando");
  }

  return (
    <div className="h-20 w-full rounded p-4 flex items-center justify-center gap-x-4 bg-gray500 text-gray100">
      <CheckCircle handleCheck={handleCheck} isChecked={isChecked} />
      {!isChecked ? (
        <p className="flex-grow">{task}</p>
      ) : (
        <p className="flex-grow line-through text-gray300">{task}</p>
      )}
      <button onClick={handleDelete}>
        <Trash size={24} className="text-gray-400 hover:text-red-400" />
      </button>
    </div>
  );
}
