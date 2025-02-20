import './style/main.scss'
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import SignIn from "./pages/SignIn"
import User from "./pages/User"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </>
  )
}
