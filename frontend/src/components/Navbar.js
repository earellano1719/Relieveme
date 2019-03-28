import React from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
import logo from "../assets/relieve_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>
        <Link to={"/"}>
          <img className="logo" src={logo} alt="" width="120px" height="auto" />
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
