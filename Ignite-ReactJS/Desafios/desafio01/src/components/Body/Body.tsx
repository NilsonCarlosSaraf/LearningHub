import { Note } from "phosphor-react";
import { Card } from "./components/Cards/Card";

export function Body({
  tasks,
  onDeleteTask,
}: {
  tasks: string[];
  onDeleteTask: (task: string) => void;
}) {
  console.log(tasks.length);

  return (
    <div className="bg-gray600 h-screen flex flex-col items-center pt-16">
      <section className="flex w-1/3 justify-between p-2">
        <div className="flex gap-2">
          <p className="text-blue-400">Tarefas criadas</p>
          <div className="bg-gray500 rounded-full text-gray-100 px-3 justify-center flex">
            {tasks.length}
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-purpleDark">Concluídas</p>
          <div className="bg-gray500 rounded-full text-gray-100 px-3">
            2 de {tasks.length}
          </div>
        </div>
      </section>
      <section className="h-2/3 w-1/3 ">
        {tasks.length !== 0 ? (
          <div className="border-t-2 border-solid border-gray-500 pt-4 gap-y-2 flex flex-col">
            {tasks.map((task, index) => (
              <Card key={index} task={task} onDelete={onDeleteTask} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center text-gray-400 pt-4 border-t-2 border-solid border-gray-500">
            <Note size={64} />
            <p className="bold text-lg">
              Você ainda não tem tarefas cadastradas
            </p>
            <p className="text-g">Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </section>
    </div>
  );
}
