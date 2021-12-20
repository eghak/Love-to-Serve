import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo-lts.png";
import "../RegSubmitted.css";

function RegSubmitted() {

  const navigate = useNavigate();

  const afterRegisterSignInBtn = () => {
    navigate("/signin")
  };
  return (
    <div className="regSubmitted">
      <div>
        <img src={Logo} alt="logo"></img>
      </div>
      <div className="submittedTitle">
        <h2>Submitted! You may now sign in</h2>
      </div>
      <div>
        <button className="regSubmittedBtn" onClick={afterRegisterSignInBtn}>
          Go to the Sign In page
        </button>
      </div>
    </div>
  );
}

export default RegSubmitted;
