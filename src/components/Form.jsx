import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../features/user/userApiSlice";
import { credentials } from "../features/auth/authSlice";
import Button from "./Button";

export default function Form() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login] = useLoginMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate("/user")
    }
  }, [navigate, userInfo])
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(credentials({ ...res }));
      navigate('/');
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  }
  
  return (
    <section className="sign-in">
        <FontAwesomeIcon className="form__icon" icon={faCircleUser} />
        <h2 className="sign-in__title">Sign In</h2>
        <form onSubmit={submitHandler}>
          <div className="input__wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={email}  
            onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input__wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"  value={password} 
            onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="input__remember">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Button type="submit" label="Sign In" />
        </form>
    </section>
  )
}
