import { Article } from "./Article";
import { CoffeeSection } from "./CoffeeSection";

export function Body() {
  return (
    <body className="bg-[#FAFAFA]">
      <Article />
      <CoffeeSection />
    </body>
  );
}
