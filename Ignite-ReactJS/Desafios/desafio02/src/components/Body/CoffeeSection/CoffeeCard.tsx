import ExpressoTradicional from "../../../imgs/coffees/Tradicional.png";
import { InputSection } from "./InputSection";

export function CoffeeCard() {
  return (
    <div className="bg-gray-100 p-4 rounded-md w-[16rem] flex flex-col items-center">
      <img src={ExpressoTradicional} className="w-min h-min" />
      <div className="rounded-lg bg-yellow-100 text-yellow-700 font-bold px-1 text-center">
        TRADICIONAL
      </div>
      <h1 className="font-bold text-lg text-gray-600">Expresso Tradicional</h1>
      <p className="text-gray-500">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="flex gap-x-4 justify-center items-center">
        <p className="text-lg font-extrabold text-gray-600">R$ 9,90</p>
        <InputSection />
      </div>
    </div>
  );
}
