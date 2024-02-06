import { useState } from "react";
import style from "./auth.module.css";
import { faGithub, faGoogle, faVk } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AuthForm = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={`container mx-auto ${style.container} ${isActive && style.active}`}>
      <div className={`${style["form-container"]} ${style["sign-up"]}`}>
        <form>
          <h1 className="text-4xl font-semibold">Create Account</h1>
          <div className={`${style["social-icons"]}`}>
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faVk} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`${style["form-container"]} ${style["sign-in"]}`}>
        <form>
          <h1 className="text-4xl font-semibold">Sign In</h1>
          <div className={`${style["social-icons"]}`}>
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faVk} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <span>or use your email and password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className={`${style["toggle-container"]}`}>
        <div className={`${style["toggle"]}`}>
          <div className={`${style["toggle-panel"]} ${style["toggle-left"]}`}>
            <h1 className="text-4xl font-semibold">Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button
              className={`${style.hidden}`}
              onClick={() => {setIsActive(false)}}
            >
              Sign In
            </button>
          </div>
          <div className={`${style["toggle-panel"]} ${style["toggle-right"]}`}>
            <h1 className="text-4xl font-semibold">Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button
              className={`${style.hidden}`}
              onClick={() => {setIsActive(true)}}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
