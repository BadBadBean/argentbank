import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Form() {
  return (
    <section className="sign-in">
        <FontAwesomeIcon className="form__icon" icon={faCircleUser} />
        <h2 className="sign-in__title">Sign In</h2>
        <form>
          <div className="input__wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input__wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
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
