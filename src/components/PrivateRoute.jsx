import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
  const { token, isLoggedOut } = useSelector((state) => state.auth);

  if (isLoggedOut) {
    return <Navigate to="/" />; 
  }

  return token ? <Outlet /> : <Navigate to="/sign-in" />;
}
