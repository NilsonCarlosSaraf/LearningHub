import { Check } from "phosphor-react";

interface CheckCircleProps {
  handleCheck: () => void;
  isChecked: boolean;
}

export default function CheckCircle({
  handleCheck,
  isChecked,
}: CheckCircleProps) {
  return !isChecked ? (
    <div
      id="circle"
      className="h-5 w-5 rounded-full flex-shrink-0 border-blue-400 border-solid border-2 hover:border-green-300"
      onClick={handleCheck}
    />
  ) : (
    <div
      id="circle"
      className="h-5 w-5 rounded-full flex-shrink-0 bg-purpleDark flex items-center justify-center"
      onClick={handleCheck}
    >
      <Check size={16} />
    </div>
  );
}
