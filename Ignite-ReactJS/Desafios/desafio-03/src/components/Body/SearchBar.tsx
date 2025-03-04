export function SearchBar() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center">
        <h1>Publicacoes</h1>
        <span>6 publicaçoes</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="bg-[#040F1A]"
      />
    </div>
  );
}
