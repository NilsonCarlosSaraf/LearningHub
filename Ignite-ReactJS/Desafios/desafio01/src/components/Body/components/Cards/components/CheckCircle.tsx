import { Check } from "phosphor-react";
import { useState } from "react";

export default function CheckCircle() {
  const [isChecked, setisChecked] = useState(false);

  function handleCheck() {
    setisChecked((state) => !state);
  }

  return !isChecked ? (
    <div
      id="circle"
      className="h-6 w-6 rounded-full flex-shrink-0 border-blue-400 border-solid border-2 "
      onClick={handleCheck}
    />
  ) : (
    <div
      id="circle"
      className="h-6 w-6 rounded-full flex-shrink-0 bg-purpleDark flex items-center justify-center"
      onClick={handleCheck}
    >
      <Check size={16} />
    </div>
  );
}
