import Avatar from "../../../public/imgs/avatar.png";

export function ProfileCard() {
  return (
    <div className="h-[13.25rem] w-[54rem] bg-red-50 rounded-lg flex absolute -bottom-[6.75rem] p-8 px-12">
      <img src={Avatar} alt="profile-img" className="w-[9.25rem] h-[9.25rem]" />
      <div className="flex flex-col">
        <h1>Cameron Williamson</h1>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
      </div>
    </div>
  );
}
