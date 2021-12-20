import React from "react";
import { useNavigate } from "react-router-dom";
import "../Welcome.css";

function Welcome({setIsSignIn}) {
  // console.log(props, "this is props");
  const navigate = useNavigate();
  
  const wantToServeBtn = () => {
    navigate("/solist")
  }

  const needHelpBtn = () => {
    navigate("/sopost");
  };

  const signOutBtn = () => {
    setIsSignIn(false)
  }

  return (
    <div className="welcome">
      <div>
      <h2 className="welcomeTitle">Welcome!</h2>
      </div>

      <div>
      <button className="welcomeBtn" onClick={wantToServeBtn} >I want to Serve</button>
      </div>

      <div>
      <button className="welcomeBtn" onClick={needHelpBtn}>
        I need a help
      </button>
      </div>

      <div>
      <button onClick={signOutBtn} className=" welcomeBtn signOutBtn">Sign Out</button>
      </div>
    </div>
  );
}

export default Welcome;
