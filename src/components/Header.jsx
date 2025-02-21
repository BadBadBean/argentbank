import { NavLink } from "react-router-dom"
import logo from "../assets/images/argentBankLogo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header>
      <NavLink to="/">
      <h1><img className="logo" src={logo} alt="Kasa" /></h1>
      </NavLink>
      <NavLink to="/sign-in"><FontAwesomeIcon icon={faCircleUser}/>Sign In</NavLink>
    </header>
  )
}
