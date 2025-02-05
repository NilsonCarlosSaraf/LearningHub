import Panel from "../../../imgs/Panel.png";
import { InfoTag } from "./InfoTag";

export function Article() {
  return (
    <article className="bg-gray-100 text-gray-900">
      <p className="text-2xl font-extrabold">
        Encontre o café perfeito para qualquer hora do dia
      </p>
      <h2>
        Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
      </h2>
      <InfoTag />
      <img src={Panel} className="flex-shrink-0" />
    </article>
  );
}
