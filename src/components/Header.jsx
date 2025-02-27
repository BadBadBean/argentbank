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
    localStorage.removeItem("token")
    navigate("/");
  };

  return (
    <header className="header">
        <NavLink to="/" className="brand">
          <img className="logo" src={logo} alt="Company Logo" />
        </NavLink>
        <nav className="nav">
          {token ? (
            <div className="nav-items">
              <span className="nav-item user-name">
                <FontAwesomeIcon icon={faCircleUser} /> {user?.userName}
              </span>
              <NavLink to="/" className="nav-item logout-link" onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
              </NavLink>
            </div>
          ) : (
            <NavLink to="/sign-in" className="nav-item">
              <FontAwesomeIcon icon={faCircleUser} /> Sign In
            </NavLink>
          )}
        </nav>
    </header>
  );
}
