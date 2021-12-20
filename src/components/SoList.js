import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-lts.png";
import "../SoList.css";

function SoList({ setIsSignIn }) {
  const [info, setInfo] = useState([
    {
      email: "",
      full_name: "",
      phone: "",
      service_needed: "",
      so_id: 0,
      user_id: 0,
    },
  ]);
  const [indexNumber, setIndexNumber] = useState(0);

  useEffect(() => {
    axios
      .get("/api/solist")
      .then((res) => {
        console.log(res);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { email, full_name, phone, service_needed, so_id, user_id } =
    info[indexNumber];

  function signOutBtn() {
    setIsSignIn(false);
  }

  function nextBtn() {
    if (indexNumber === info.length - 1) {
      document.getElementById("listMessage").innerHTML =
        "*You have reached the end of the list. Please click the Previous button to see them again.";
    } else {
      setIndexNumber(indexNumber + 1);
      document.getElementById("listMessage").innerHTML = "";
    }
  }

  function previousBtn() {
    if (indexNumber === 0) {
      document.getElementById("listMessage").innerHTML =
        "*Please click the Next button to view more";
    } else {
      setIndexNumber(indexNumber - 1);
      document.getElementById("listMessage").innerHTML = "";
    }
  }

  return (
    <div className="soList">
      <div>
        <img className="soListImg" src={Logo} alt="logo"></img>
      </div>

      <div>
        <div>
          <h2>Service Opportunities</h2>
        </div>

        <div className="theInfo">
          <p>Full Name: {full_name}</p>
          <p>Service Needed: {service_needed}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>

        <button className="btn" id="sidebtn" onClick={previousBtn}>
          &#60; Previous
        </button>

        <button className="btn" id="sidebtn" onClick={nextBtn}>
          Next &gt;
        </button>

        <div id="listMessage"></div>

        <div>
          <p>
            Click <Link to="/sopost">here</Link> to post a service opportunity
          </p>
        </div>

        <div>
          <button onClick={signOutBtn} className="soListSignOutBtn">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default SoList;
