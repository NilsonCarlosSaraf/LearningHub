import { MapPin, ShoppingCart } from "phosphor-react";

export function LocationNCart() {
  return (
    <div className="flex ga-x-2">
      <div className="bg-purple-300 flex gap-x-2 justify-center items-center rounded-md">
        <MapPin size={24} />
        <p>Porto Alegre, RS</p>
      </div>
      <ShoppingCart size={24} />
    </div>
  );
}
