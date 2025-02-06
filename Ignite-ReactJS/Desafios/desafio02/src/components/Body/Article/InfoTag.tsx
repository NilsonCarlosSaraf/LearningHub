import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";

export function InfoTag() {
  return (
    <div className="flex items-center gap-16">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-yellow-600 flex justify-center items-center">
            <ShoppingCart size={22} color="white" />
          </div>
          <p>Compra simples e segura</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-yellow-400 flex justify-center items-center">
            <Clock size={22} color="white" />
          </div>
          <p>Compra simples e segura</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-gray-600 flex justify-center items-center">
            <Package size={22} color="white" />
          </div>
          <p>Compra simples e segura</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-purple-700 flex justify-center items-center">
            <Coffee size={22} color="white" />
          </div>
          <p>Compra simples e segura</p>
        </div>
      </div>
    </div>
  );
}
