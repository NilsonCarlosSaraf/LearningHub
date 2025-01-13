import { Check } from "phosphor-react";
import { useState } from "react";

export function Card() {
  const [isChecked, setisChecked] = useState(true);

  return (
    <div className="h-20 w-full rounded p-4 flex items-center justify-center gap-x-4 bg-gray500 text-gray100">
      {!isChecked ? (
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
      )}
      <p className="flex-grow">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius atque
        suscipit beatae repellat eum tenetur error nihil blanditiis! Provident,
        explicabo laborum alias repellendus numquam quaerat magni ducimus qui
        iure ratione.
      </p>
    </div>
  );
}
