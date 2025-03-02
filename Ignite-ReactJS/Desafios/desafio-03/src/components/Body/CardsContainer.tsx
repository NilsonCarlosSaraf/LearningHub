import { ReactNode } from "react";

interface CardsContainerProps {
  children: ReactNode;
}

export function CardsContainer({ children }: CardsContainerProps) {
  return <div className="w-[54rem] h-full flex">{children}</div>;
}
