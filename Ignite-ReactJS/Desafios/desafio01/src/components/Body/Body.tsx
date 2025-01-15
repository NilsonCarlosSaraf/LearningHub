import { Card } from "./components/Cards/Card";

export function Body({ tasks }: { tasks: string[] }) {
  console.log(tasks.length);

  return (
    <body className="bg-gray600 h-screen flex items-end justify-center p-8">
      {tasks.length !== 0 ? (
        <section className="z-10 h-2/3 w-1/3 border-t-2 border-solid border-gray-500 pt-4 gap-y-2 flex flex-col">
          {tasks.map((task) => (
            <Card task={task} />
          ))}
        </section>
      ) : (
        <section className="bg-red-400 z-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ut nam
          quos doloribus deleniti fugit sunt expedita beatae, quidem itaque.
          Quae, nisi natus. Iste accusamus magni sit doloribus quia aliquam?
        </section>
      )}
    </body>
  );
}
