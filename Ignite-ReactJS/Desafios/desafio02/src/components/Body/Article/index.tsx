import Panel from "../../../imgs/Panel.png";
import { Info } from "./Info";

export function Article() {
  return (
    <article className="bg-[#FAFAFA] text-gray-900 flex justify-between">
      <Info />
      <img src={Panel} className="flex-shrink-0" />
    </article>
  );
}
