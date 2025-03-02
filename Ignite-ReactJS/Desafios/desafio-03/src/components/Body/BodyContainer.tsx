import { ReactNode } from "react";

interface BodyContainerProps {
  children: ReactNode;
}

export function BodyContainer({ children }: BodyContainerProps) {
  return (
    <div className="w-[54rem] flex flex-col justify-start items-center">
      {children}
    </div>
  );
}
