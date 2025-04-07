import { IssueCard } from "../components/IssuePageComponents/IssueCard";

export function IssuePage() {
  return (
    <div className="flex flex-col justify-center items-center pt-[10rem] w-full bg-[#071422] relative h-full">
      <IssueCard />
      <p className="text-baseTitle">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types.
      </p>
    </div>
  );
}
