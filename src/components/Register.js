import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "../images/logo-lts.png";
import "../Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import RegSubmitted from "./RegSubmitted";

function Register() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  };

  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values, "this is initialValue");
    axios
      .post("http://localhost:3001/api/user", values)
      .then((res) => {
        if (res.data === "Email already exist") {
          alert(res.data);
        } else {
          navigate("/regsubmitted");
        }
        console.log("hello");
        console.log(res, "this is the response object");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("* First name is required"),
    lastName: Yup.string().required("* Last name is required"),
    email: Yup.string()
      .email("* Invalid email format")
      .required("* Email is required"),
    phone: Yup.number()
      .typeError("* Please enter a valid phone number")
      .required("Phone is required!"),
    password: Yup.string().required("* Password is required"),
  });

  return (
    <div className="register">
      <div>
        <img src={Logo} alt="logo"></img>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="registerForm">
            <h2>Register</h2>
          </div>

          <div className="registerForm">
            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <ErrorMessage className="errorM" name="firstName" />
          </div>

          <div className="registerForm">
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <ErrorMessage className="errorM" name="lastName" />
          </div>

          <div className="registerForm">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" />
          </div>

          <div className="registerForm">
            <label htmlFor="phone">Phone</label>
            <Field type="tel" id="phone" name="phone" placeholder="Phone" />
            <ErrorMessage className="errorM" name="phone" />
          </div>

          <div className="registerForm">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage className="errorM" name="password" />
          </div>

          <div className="registerForm">
            <button type="submit">Submit</button>
          </div>

          <p>
            Already have an account? Click <Link to="/signin">here</Link> to
            sign in
          </p>
          <p>
            Back to <Link to="/">Home</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
