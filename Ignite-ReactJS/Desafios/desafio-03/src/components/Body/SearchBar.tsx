export function SearchBar() {
  return (
    <div className="flex flex-col w-full">
      <h1>Publicacoes</h1>{" "}
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="bg-[#040F1A]"
      />
    </div>
  );
}
