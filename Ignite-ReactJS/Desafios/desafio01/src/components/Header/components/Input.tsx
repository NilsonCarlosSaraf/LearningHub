export function Input() {
  return (
    <div className="flex gap-x-4 relative -bottom-4">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="bg-gray300 h-8 rounded w-80 px-2 text-justify"
      />
      <button className="bg-blueDark rounded w-20 h-8 text-white">Criar</button>
    </div>
  );
}
