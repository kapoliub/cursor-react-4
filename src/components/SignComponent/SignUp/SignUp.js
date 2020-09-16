import React, { useState } from "react";
import { Link } from "react-router-dom";

import padlock from "../../../assets/img/padlock.svg";
import s from "../SignComponent.module.css";

const checkInput = (target, regEx) => {
  if (target.value.match(regEx)) {
    target.style.borderColor = "green";
  } else {
    target.style.borderColor = "red";
  }
};

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribe, setSubscribe] = useState(true);

  const nameRegExp = /^[a-z]{3,}/i;
  const emailRegEx = /^[a-z]{3,}[@]{1}[a-z]{2,}[.]{1}[a-z]{2,}$/i;
  const passwordRegEx = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}/;

  const changeHandler = (e) => {
    if (e.target.name === "firstName") {
      checkInput(e.target, nameRegExp);
      setFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      checkInput(e.target, nameRegExp);

      setLastName(e.target.value);
    } else if (e.target.name === "email") {
      checkInput(e.target, emailRegEx);

      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      checkInput(e.target, passwordRegEx);

      setPassword(e.target.value);
    } else if (e.target.name === "subscribe") {
      setSubscribe(!subscribe);
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    if (
      firstName.match(nameRegExp) &&
      lastName.match(nameRegExp) &&
      email.match(emailRegEx) &&
      password.match(passwordRegEx)
    ) {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("subscribed", subscribe);
      localStorage.removeItem("rememberMe");

      window.location.reload(false);
    } else {
      console.log("Something goes wrong. Check input data");
    }
  };
  return (
    <div className={s.Sign}>
      <div className={s.formHeader}>
        <div className={s.logoWrapper}>
          <img src={padlock} alt="padlock_img" />
        </div>
        <p>Sign up</p>
      </div>
      <div className={s.formBody}>
        <form className={s.form}>
          <div className={s.nameInputs}>
            <input
              type="text"
              name="firstName"
              onChange={changeHandler}
              value={firstName}
              placeholder="First Name *"
              required
            />
            <input
              type="text"
              name="lastName"
              onChange={changeHandler}
              value={lastName}
              placeholder="Last Name *"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={email}
            placeholder="Email Address *"
            required
          />
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={password}
            placeholder="Password *"
            required
          />
          <label>
            <input
              type="checkbox"
              name="subscribe"
              onChange={changeHandler}
              checked={subscribe}
            />
            <span>
              I want to receive inspiration, marketing promotions and updates
              via email
            </span>
          </label>
          <input type="submit" value="SIGN UP" onClick={addUser} />
        </form>
        <div className={s.actionsBlock}>
          <div></div>
          <Link to="/signin">Already have an account? Sign in</Link>
        </div>
      </div>
      <div className={s.formFooter}>Copyright © Your Website 2020.</div>
    </div>
  );
};

export default SignUp;
