import { ShoppingCart } from "phosphor-react";

export function InfoTag() {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full w-8 h-8 bg-yellow-600 flex justify-center items-center">
        <ShoppingCart size={22} color="white" />
      </div>
      <p>Compra simples e segura</p>
    </div>
  );
}
