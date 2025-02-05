import { Article } from "./Article";
import { CoffeeSection } from "./CoffeeSection";

export function Body() {
  return (
    <body className="bg-blue-300">
      <Article />
      <CoffeeSection />
    </body>
  );
}
