import { Note } from "phosphor-react";
import { Card } from "./components/Cards/Card";

export function Body({ tasks }: { tasks: string[] }) {
  console.log(tasks.length);

  return (
    <body className="bg-gray600 h-screen flex justify-center p-8">
      {tasks.length !== 0 ? (
        <section className="h-2/3 w-1/3 border-t-2 border-solid border-gray-500 pt-4 gap-y-2 flex flex-col">
          {tasks.map((task) => (
            <Card task={task} />
          ))}
        </section>
      ) : (
        <section className="flex flex-col items-center gap-y-2 text-gray-400 pt-4 border-t-2 border-solid border-gray-500  w-1/3">
          <Note size={64} />
          <p className="bold text-lg">Você ainda não tem tarefas cadastradas</p>
          <p className="text-g">Crie tarefas e organize seus itens a fazer</p>
        </section>
      )}
    </body>
  );
}
