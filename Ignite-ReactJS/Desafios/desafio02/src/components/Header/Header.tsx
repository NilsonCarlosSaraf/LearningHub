import Logo from "../../imgs/Logo.png";
import { LocationNCart } from "./components/LocationNCart";

export function Header() {
  return (
    <header className="bg-red-300 flex justify-between">
      <img src={Logo} />
      <LocationNCart />
    </header>
  );
}
