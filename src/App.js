import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SoList from "./components/SoList";
import SoPost from "./components/SoPost";
import Register from "./components/Register";
import RegSubmitted from "./components/RegSubmitted";
import SoPostSubmitted from "./components/SoPostSubmitted";
import Welcome from "./components/Welcome";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [userID, setUserID] = useState(null);
  console.log(userID, "app userID");
  //import redirect from react-router

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <SignIn
                setUserID={setUserID}
                isSignIn={isSignIn}
                setIsSignIn={setIsSignIn}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/solist" element={isSignIn ? <SoList setIsSignIn={setIsSignIn} /> : <Navigate to="/" />} />
          <Route path="/sopost" element={isSignIn ? <SoPost setIsSignIn={setIsSignIn} userID={userID} /> : <Navigate to="/" />} />
          <Route path="/regsubmitted" element={<RegSubmitted />} />
          <Route path="/sopostsubmitted" element={isSignIn ? <SoPostSubmitted setIsSignIn={setIsSignIn}  /> : <Navigate to="/"/>} />
          <Route path="/welcome" element={isSignIn ? <Welcome setIsSignIn={setIsSignIn} /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


