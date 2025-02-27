import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Header() {
  const { user, token } = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    localStorage.removeItem("token")
  };

  return (
    <header className="header">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Argent Bank" />
        </NavLink>
        <nav>
          {token && user ? (
            <div>
              <span className="username">
                <FontAwesomeIcon icon={faCircleUser} /> {user?.userName}
              </span>
              <NavLink to="/" onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
              </NavLink>
            </div>
          ) : (
            <NavLink to="/sign-in">
              <FontAwesomeIcon icon={faCircleUser} /> Sign In
            </NavLink>
          )}
        </nav>
    </header>
  );
}
