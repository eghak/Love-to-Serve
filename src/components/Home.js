import React from "react";
import { useNavigate } from "react-router-dom";
import "../Home.css";
import Logo from "../images/logo-lts.png";

function Home() {
  const navigate = useNavigate();

  const signInBtn = () => {
    navigate("/signin");
  };

  const registerBtn = () => {
    navigate("/register");
  };

  return (
    <div className="home">
      <div>
        <img src={Logo} alt="logo"></img>
      </div>
      <div>
        <h1 className="homeTitle">Serve Thy Neighbors</h1>
        <p className="homeP">
          Build a loving community by serving your neighbors. It is our mission
          to help you create a family-friendly neighborhood that is full of
          kindness. Through this app, you can register to be both volunteer and
          volunteer seeker. Let's help each other, spread the love, and create a
          great place to live!
        </p>
        <button type="button" className="homeBtn" onClick={signInBtn}>
          Sign In
        </button>
        <button type="button" className="homeBtn" onClick={registerBtn}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
