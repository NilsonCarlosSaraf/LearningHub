export function Card() {
  return (
    <div className="h-20 w-full rounded p-4 flex items-center justify-center gap-x-4 bg-gray500 text-gray100">
      <div
        id="circle"
        className="bg-red-500 h-4 w-4 rounded-full flex-shrink-0 border-s-white-2"
      />
      <p className="flex-grow">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius atque
        suscipit beatae repellat eum tenetur error nihil blanditiis! Provident,
        explicabo laborum alias repellendus numquam quaerat magni ducimus qui
        iure ratione.
      </p>
    </div>
  );
}
