import React from "react";
import "./css/Home.css";
const Home = () => {
  return (
    <div className="home-data">
      <div className="title">
        <h1>
          Welcome to <p className="titleName">CleverGround</p>
        </h1>
      </div>
      <div className="home-details">
        <h3>Learning management system focused on students.</h3>
        <p>
          With Clever Learning Management System (CLMS), Spend less to no time
          on tedious everyday work like checking and collecting assignments!
          Easy to use, easy to install and easy to improvise!
        </p>
      </div>
    </div>
  );
};

export default Home;
