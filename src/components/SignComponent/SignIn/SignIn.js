import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import padlock from "../../../assets/img/padlock.svg";
import s from "../SignComponent.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(
    Boolean(localStorage.getItem("rememberMe"))
  );
  const [isLogged, setIsLogged] = useState(false);

  const changeHandler = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "rememberMe") {
      setRememberMe(!rememberMe);
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("rememberMe") !== null &&
      localStorage.getItem("rememberMe") === "true"
    ) {
      setEmail(localStorage.getItem("email"));
      setPassword(localStorage.getItem("password"));
    }
  });

  const clickHandler = (e) => {
    e.preventDefault();
    if (
      email === localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      localStorage.setItem("rememberMe", rememberMe);
      setIsLogged(true);
      console.log("You are logged in");
    } else {
      alert("Email or password is wrong");
    }
  };

  return (
    <div className={s.Sign}>
      {isLogged ? <Redirect to="/welcome" /> : null}
      <div className={s.formHeader}>
        <div className={s.logoWrapper}>
          <img src={padlock} alt="padlock_img" />
        </div>
        <p>Sign in</p>
      </div>
      <div className={s.formBody}>
        <form className={s.form}>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={email}
            placeholder="Email Address *"
            title="example@example.com"
          />
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={password}
            placeholder="Password *"
            title="Must contains at least 8 characters (16 max), including at least 1 number and includes both lower and uppercase letters"
          />
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              onChange={changeHandler}
              checked={rememberMe}
            />
            <span>Remember me</span>
          </label>
          <input type="submit" onClick={clickHandler} value="SIGN IN" />
        </form>
        <div className={s.actionsBlock}>
          <div>Forgot password?</div>
          <Link to="/signup">Don`t have an account? Sign Up</Link>
        </div>
      </div>
      <div className={s.formFooter}>Copyright © Your Website 2020.</div>
    </div>
  );
};

export default SignIn;
