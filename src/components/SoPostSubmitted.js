import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo-lts.png";
import "../SoPostSubmitted.css";

function RegSubmitted({setIsSignIn}) {

  const navigate = useNavigate();

  const soPostSubmittedBtn = () => {
    navigate("/solist");
  };

  const signOutBtn = () => {
    setIsSignIn(false)
  }

  return (
    <div className="soPostSubmitted">
      <div>
        <img src={Logo} alt="logo"></img>
      </div>
      <div className="soPostSubmittedTitle">
        <h2>
          Submitted! The volunteer will contact you directly when they are
          available to help you.
        </h2>
      </div>
      <div>
        <button className="soPostSubmittedBtn" onClick={soPostSubmittedBtn}>
          Go to the Service Opportunities List page
        </button>
        <button  onClick={signOutBtn} className="signOutBtn soPostSubmittedBtn">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default RegSubmitted;
