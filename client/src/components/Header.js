
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";


function Header() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
       <img className="logo2" src={logo} />
       <span></span>
       <span></span>
      <div className="rightSide" id={openLinks ? "open" : "close"}>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Header