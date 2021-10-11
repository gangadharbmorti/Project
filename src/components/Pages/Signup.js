import React, { useState } from "react";
import "./css/Signup.css";

import { Link } from "react-router-dom";

const SignupForm = () => {
  const [userRegister, setUserRegister] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  });
  
  const [newValue, setNewValue] = useState([]);

  const handleEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserRegister({ ...userRegister, [name]: value });
  };
  const signupSubmit = (e) => {
    e.preventDefault();
    const newData = { ...userRegister };
    setNewValue([...newValue, newData]);
    setUserRegister({ fullName: "", mobile: "", email: "", password: "" });
  };

  return (
    <form onSubmit={signupSubmit}>
      <div className="form">
        <h2>Sign Up</h2>
        <div className="form-details">
          <label htmlFor="fullName">Full Name: </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={userRegister.fullName}
            onChange={handleEvent}
          />
        </div>
        <div className="form-details">
          <label htmlFor="mobile">Mobile No: </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={userRegister.mobile}
            onChange={handleEvent}
          ></input>
        </div>
        <div className="form-details">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userRegister.email}
            onChange={handleEvent}
            autoComplete="off"
          />
        </div>
        <div className="form-details">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userRegister.password}
            onChange={handleEvent}
          />
        </div>
        <button className="btn">Submit</button>
        <div className="form-details">
          <p>
            Already have a account login here
            <Link className="button-inv" to="/">
              Log In
            </Link>
          </p>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>FullName</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {newValue.map((value) => {
              return (
                <tr>
                  <td>{value.fullName}</td>
                  <td>{value.mobile}</td>
                  <td>{value.email}</td>
                  <td>{value.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default SignupForm;
