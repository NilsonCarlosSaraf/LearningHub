import { CardsContainer } from "./CardsContainer";
import { Card } from "./Card";
import { SearchBar } from "./SearchBar";
import { BodyContainer } from "./BodyContainer";
import { ProfileCard } from "../ProfileCard";

export function Body() {
  return (
    <div className="flex flex-col justify-center items-center pt-[10rem] w-full bg-[#071422] relative">
      <ProfileCard />
      <BodyContainer>
        <SearchBar />
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </BodyContainer>
    </div>
  );
}
