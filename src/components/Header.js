import React from "react";
import ReactDOM from"react-dom/client";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [usebtnName,setbtnName] = useState("Login");
  return (
    <div id="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo of the app" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Contact Us</li>
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

