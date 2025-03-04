export function SearchBar() {
  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-baseSubtitle">Publicacoes</h1>
        <span className="text-baseSpan">6 publicaçoes</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="bg-[#040F1A] placeholder:text-baseLabel"
      />
    </div>
  );
}
