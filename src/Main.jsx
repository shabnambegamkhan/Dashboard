import React from "react";
import "./App.css"
import "./Main.css"
import { useNavigate } from "react-router-dom";

function Main() {

  const navigate = useNavigate();

  // Navigate to the SignUp page
  function handleSignUp() {
    navigate("/SignUp");
  }

  // Navigate to the LogIn page
  function handleLogIn() {
    navigate("/LogIn");
  }

  return (
    <div className="main-container">
      <div className="heading">
        <h1><marquee direction="left" >Welcome To My Dashboard</marquee></h1>
      </div>

      <div className="btn" style={{
    
  }}>
        <button style={{
      // padding: "10px 20px",
      // fontSize: "26px",
      // color: "#fff",
      // backgroundColor: "#28a715",
      // border: "none",
      // borderRadius: "5px",
      // cursor: "pointer",
    }
    } onClick={handleSignUp}>Sign Up</button>
        <button   style={{
      // padding: "10px 20px",
      // fontSize: "26px",
      // color: "#fff",
      // backgroundColor: "#28a715",
      // border: "none",
      // borderRadius: "5px",
      // cursor: "pointer",
    }} onClick={handleLogIn}>Log In</button>
      </div>
    </div>
  );
}

export default Main;
