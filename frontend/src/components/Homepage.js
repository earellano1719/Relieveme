import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import "../css/Homepage.css";
import loc_icon from "../assets/kisspng-map-computer-icons-clip-art-map-red-pin-png-5ab1ace8b19201.6464219015215935767273.png";


const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="home_title">
          <h1>Welcome to Relieve Me!</h1>
        </div>
        <h6 className="subtitle">
          An app for Taxi and For-Hire-Vehicle drivers who are on the go and need to "go"!
        </h6>
        <div className="locationIcon">
          <Link to="/">
            <img src={loc_icon} alt="" width="50px" />
          </Link>
        </div>
        <div className="curr_loc">
          <p>Find Your Current Location</p>
        </div>
        <br />
        <br />
        <div className="browseByBoro"> OR Browse By Borough</div>
        <div className="boro_links">
          <Link to="/byborough/bronx">Bronx</Link>
          <Link to="/byborough/brooklyn">Brooklyn</Link>
          <Link to="/byborough/manhattan">Manhattan</Link>
          <Link to="/byborough/queens">Queens</Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
