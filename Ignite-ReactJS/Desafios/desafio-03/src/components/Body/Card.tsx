import { getUser } from "../../hooks/User";

export async function Card() {
  const user = await getUser("NilsonCarlosSaraf");
  console.log(user); // Log the user data to the console

  return (
    <div className="w-[26rem] h-[16.25rem] flex flex-col gap-4 p-4 rounded bg-[#112131]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-baseTitle">
          JavaScript data types and data strctures
        </h1>
        <span className="text-baseSpan">Há 1 dia</span>
      </div>
      <p className="text-baseText">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        deserunt, a tempora consequatur, et ullam voluptates accusantium
        deleniti minus aut quia error, dignissimos sed commodi. Omnis
        consequatur nulla atque dolorum?
      </p>
    </div>
  );
}
