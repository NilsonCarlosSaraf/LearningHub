import Logo from "../../imgs/Logo.png";
import { LocationNCart } from "./components/LocationNCart";

export function Header() {
  return (
    <header className="bg-[#FAFAFA] flex justify-between">
      <img src={Logo} />
      <div>
        <LocationNCart />
      </div>
    </header>
  );
}
