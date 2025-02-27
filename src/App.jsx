import "./style/main.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
