import { user } from "../../hooks/User";

export function ProfileCard() {
  const gitHubImage = user.avatar_url;

  return (
    <div className="h-[13.25rem] w-[54rem] rounded-lg flex absolute -top-[6.75rem] p-8 px-12 bg-[#0B1B2B]">
      <img src={gitHubImage} className="w-[9.25rem] h-[9.25rem]" />
      <div className="flex flex-col">
        <h1 className="text-baseTitle">Cameron Williamson</h1>
        <p className="text-baseText">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
      </div>
    </div>
  );
}
