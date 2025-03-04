export function SearchBar() {
  return (
    <div className="flex flex-col w-full p-4 gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-baseSubtitle">Publicações</h1>
        <span className="text-baseSpan">6 publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="bg-[#040F1A] placeholder:text-baseLabel p-2 rounded border-baseBorder border"
      />
    </div>
  );
}
