import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "../images/logo-lts.png";
import { Link, useNavigate } from "react-router-dom";
import "../SoPost.css";
import axios from "axios";

function SoPost({ userID, setIsSignIn }) {
  const initialValues = {
    fullName: "",
    serviceNeeded: "",
    email: "",
    phone: "",
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("* Full name is required"),
    serviceNeeded: Yup.string().required("* Service needed is required"),
    email: Yup.string()
      .email("* Invalid email format")
      .required("* Email is required"),
    phone: Yup.number()
      .typeError("* Please enter a valid phone number")
      .required("* Phone is required"),
  });
  console.log(userID, "userID");
  const handleSubmit = (values) => {
    values["userID"] = userID;
    console.log("Form data", values);
    axios
      .post("http://localhost:3001/api/sopost", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/sopostsubmitted");
  };

  const signOutBtn = () => {
    setIsSignIn(false);
  };

  return (
    <div className="soPost">
      <div>
        <img src={Logo} alt="logo"></img>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="soPostForm">
            <h2>
              Please fill out this form to request for help or to post a service
              opportunity
            </h2>
          </div>

          <div className="soPostForm">
            <label htmlFor="fullName">Full Name</label>
            <Field
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
            />
            <ErrorMessage name="fullName" />
          </div>

          <div className="soPostForm">
            <label htmlFor="serviceNeeded">Help needed(what & when)</label>
            <Field
              type="text"
              id="serviceNeeded"
              name="serviceNeeded"
              placeholder="Help needed (what & when)"
            />
            <ErrorMessage name="serviceNeeded" />
          </div>

          <div className="soPostForm">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" />
          </div>

          <div className="soPostForm">
            <label htmlFor="phone">Phone</label>
            <Field type="tel" id="phone" name="phone" placeholder="Phone" />
            <ErrorMessage name="phone" />
          </div>

          <div className="soPostForm">
            <button type="submit">Submit</button>
          </div>

          <div>
          <p>
            Click <Link to="/solist">here</Link> to see service opportunities
          </p>
          </div>

          <div>
          <button onClick={signOutBtn} className="signOutBtn">
          Sign Out
        </button>
          </div>

        </Form>
      </Formik>

     

    </div>
  );
}

export default SoPost;
