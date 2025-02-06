import { MapPin, ShoppingCart } from "phosphor-react";

export function LocationNCart() {
  return (
    <div className="flex gap-x-2">
      <div className="bg-purple-300 flex gap-x-2 justify-center items-center rounded-md px-2">
        <MapPin size={24} />
        <p>Porto Alegre, RS</p>
      </div>
      <div className="bg-yellow-100 h-[2.2rem] w-[2.2rem] text-yellow-700 flex justify-center items-center rounded-md">
        <ShoppingCart size={24} />
      </div>
    </div>
  );
}
