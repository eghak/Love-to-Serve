import React, { useState } from "react";
import Logo from "../images/logo-lts.png";
import "../SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn({ isSignIn, setIsSignIn, setUserID }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInBtn = (e) => {
    e.preventDefault();
    axios
      .post("/api/user/signin", { email: email, password: password })
      .then((res) => {
        console.log(res.data.user_id);
        setUserID(res.data.user_id);
          console.log("Signed In");
          setIsSignIn(true);
          return navigate("/welcome", { userID: res.data.userID });
      })
      .catch((err) => {
        console.log(err)
        return alert("Wrong email or password");
      });
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="signIn">
      <div>
        <img src={Logo} alt="logo"></img>
      </div>

      <form>
        <div className="signInForm">
          <h2>Sign In</h2>
        </div>
        <div className="signInForm">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleEmailInput}
          ></input>
        </div>
        <div className="signInForm">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            placeholder="Password"
            id="password"
            onChange={handlePasswordInput}
          ></input>
        </div>
        <div className="signInForm">
          <button onClick={signInBtn}>Sign In</button>
        </div>
        <div className="signInForm">
          <p>
            Don't have an account? Click <Link to="/register">here</Link> to
            register
          </p>
          <p>
            Back to <Link to="/">Home</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
