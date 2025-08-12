import React from "react";
import ReactDOM from"react-dom/client";
import {LOGO_URL} from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router";
const Header = () => {
  const [usebtnName,setbtnName] = useState("Login");
  const [usetext,setuseText] = useState("");
  console.log("Header rendered");
  useEffect(()=>{
    console.log("useEffect called")
  })
  return (
    <div id="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo of the app" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
           <Link to="/">Home </Link> 
            </li>
          <li>
            <Link to="/About">About</Link>
            </li>
          <li>
           <Link to="/Contact">Contact Us</Link> 
            </li>
          <li>Cart</li>
          <button className="btn-Name" onClick={()=>
            usebtnName==="Login"?setbtnName("Logout"):setbtnName("Login")
          }>{usebtnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

