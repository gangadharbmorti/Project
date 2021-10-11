import React, { useState } from "react";


import { Link } from "react-router-dom";
import "./css/Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newData, setNewData] = useState([]);

  const onSubmits = (event) => {
    event.preventDefault();
    if(email && password){

      const newLoginData = {  email: email, password: password };
    setNewData([...newData, newLoginData]);
    console.log(newData);

    setEmail("");
    setPassword("");

    }else{
      alert("please enter login details");
    }
      };

 
  return (
    
    <form onSubmit={onSubmits}>
      <div className="form-inside">
        <h2>Login</h2>

        <div className="form-data">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="form-data">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
           <Link className="button-inv" to="/forgotpassword">
         Forgot Password
        </Link>
        </div>
        
        <button
          type="submit"
          className="submit-button"
         
        >
          Submit
        </button>
        <div className="form-dat">
          <p>
            Dont have a Account Sign Up here
            <Link className="button-inv" to="/signup">
          
              Signup
            </Link>
          </p>
        </div>
        <div>
        {newData.map((showData) => {
          return console.log("Email: ",showData.email, "Password:",showData.password)
           
        
        })}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
