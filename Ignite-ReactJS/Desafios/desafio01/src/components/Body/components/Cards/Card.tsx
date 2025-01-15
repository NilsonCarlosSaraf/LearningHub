import CheckCircle from "./components/CheckCircle";

export function Card({ task }: { task: string }) {
  return (
    <div className="h-20 w-full rounded p-4 flex items-center justify-center gap-x-4 bg-gray500 text-gray100">
      <CheckCircle />
      <p className="flex-grow">{task}</p>
    </div>
  );
}
