import { Card } from "./components/Cards/Card";

export function Body({ tasks }: { tasks: string[] }) {
  console.log(tasks);

  return (
    <body className="bg-gray600 h-screen flex items-end justify-center p-8">
      <section className="z-10 h-2/3 w-1/3 border-t-2 border-solid border-gray-500 pt-4 gap-y-2 flex flex-col">
        {tasks.map((task) => (
          <Card task={task} />
        ))}
      </section>
    </body>
  );
}
