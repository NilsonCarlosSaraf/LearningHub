import { CardsContainer } from "./CardsContainer";
import { Card } from "./Card";
import { SearchBar } from "./SearchBar";
import { BodyContainer } from "./BodyContainer";

export function Body() {
  return (
    <div className="flex flex-col justify-center items-center pt-[10rem] w-full">
      <BodyContainer>
        <SearchBar />
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </BodyContainer>
    </div>
  );
}
