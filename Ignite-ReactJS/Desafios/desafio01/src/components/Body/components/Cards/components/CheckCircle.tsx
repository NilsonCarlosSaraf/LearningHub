import { Check } from "phosphor-react";
import { useState } from "react";

export default function CheckCircle() {
  const [isChecked, setisChecked] = useState(false);

  return !isChecked ? (
    <div
      id="circle"
      className="h-6 w-6 rounded-full flex-shrink-0 border-blue-400 border-solid border-2 "
      onClick={() => setisChecked(true)}
    />
  ) : (
    <div
      id="circle"
      className="h-6 w-6 rounded-full flex-shrink-0 bg-purpleDark flex items-center justify-center"
      onClick={() => setisChecked(false)}
    >
      <Check size={16} />
    </div>
  );
}
