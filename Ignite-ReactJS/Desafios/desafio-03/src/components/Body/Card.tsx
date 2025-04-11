interface ICardProps {
  title: string;
  body: string;
}

export function Card({ title, body }: ICardProps) {
  return (
    <div className="w-[26rem] h-[16.25rem] flex flex-col gap-4 p-4 rounded bg-[#112131]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-baseTitle">{title}</h1>
        <span className="text-baseSpan">Há 1 dia</span>
      </div>
      <p className="text-baseText">{body}</p>
    </div>
  );
}
