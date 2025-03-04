import { ReactNode } from "react";

interface CardsContainerProps {
  children: ReactNode;
}

export function CardsContainer({ children }: CardsContainerProps) {
  return (
    <div className="w-[54rem] h-full grid grid-cols-2 gap-8">{children}</div>
  );
}
