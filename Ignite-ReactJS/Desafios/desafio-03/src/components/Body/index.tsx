import { CardsContainer } from "./CardsContainer";
import { Card } from "./Card";
import { SearchBar } from "./SearchBar";
import { BodyContainer } from "./BodyContainer";
import { ProfileCard } from "../ProfileCard";
import { issues } from "../../hooks/Issues";

export function Body() {
  console.log("ISSUES:", issues);

  return (
    <div className="flex flex-col justify-center items-center pt-[10rem] w-full bg-[#071422] relative">
      <ProfileCard />
      <BodyContainer>
        <SearchBar />
        <CardsContainer>
          {issues.map((issue) => {
            const { url, title, body, updated_at } = issue;
            return (
              <Card
                key={url}
                title={title}
                body={body}
                updated_at={updated_at}
              />
            );
          })}
        </CardsContainer>
      </BodyContainer>
    </div>
  );
}
