import { NavLink } from "react-router-dom";
import logo from "../assets/images/argentBankLogo.webp";

export default function Header() {
  return (
    <header>
      <h1>
        <img className="logo" src={logo} alt="Argent Bank" />
      </h1>
      <NavLink to="/">Sign In</NavLink>
    </header>
  );
}
