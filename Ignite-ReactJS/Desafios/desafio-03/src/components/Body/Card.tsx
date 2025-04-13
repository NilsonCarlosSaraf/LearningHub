interface ICardProps {
  title: string;
  body: string;
  updated_at: string;
}

export function Card({ title, body, updated_at }: ICardProps) {
  return (
    <div className="w-[26rem] h-auto flex flex-col gap-4 p-4 rounded bg-[#112131]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-baseTitle">{title}</h1>
        <span className="text-baseSpan text-nowrap">{updated_at}</span>
      </div>
      <p className="text-baseText">{body}</p>
    </div>
  );
}
