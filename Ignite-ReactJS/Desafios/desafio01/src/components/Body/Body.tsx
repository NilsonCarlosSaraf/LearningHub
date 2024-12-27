import { Card } from "./components/Card";

export function Body() {
  return (
    <body className="bg-gray600 h-screen flex items-end justify-center p-8">
      <section className="z-10 h-2/3 w-1/3 border-t-2 border-solid border-gray-500 pt-4">
        <Card />
      </section>
    </body>
  );
}
