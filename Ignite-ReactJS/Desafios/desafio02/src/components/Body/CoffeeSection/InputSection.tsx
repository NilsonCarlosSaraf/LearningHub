import { ShoppingCartSimple } from "phosphor-react";

export function InputSection() {
  return (
    <div className="flex justify-center rounded-lg gap-x-1">
      <div className="flex items-center w-[4.5rem] bg-gray-200 rounded-lg">
        <button className="text-purple-900 text-xl w-[2rem]">-</button>
        <div className="p-2 text-xl">1</div>
        <button className="text-purple-900 text-xl w-[2rem]">+</button>
      </div>
      <button className="bg-purple-900 rounded-lg px-2 flex justify-center items-center">
        <ShoppingCartSimple size={24} color="white" />
      </button>
    </div>
  );
}
