import { CardsContainer } from "./CardsContainer";
import { Card } from "./Card";
import { SearchBar } from "./SearchBar";

export function Body() {
  return (
    <div className="flex flex-col justify-center items-center pt-[10rem] w-full">
      <SearchBar />
      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </div>
  );
}
