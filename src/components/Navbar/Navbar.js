import React, { useState } from "react";
import "./styles/Navbar.css";
import logo from "../../img/logo2.png";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="Navbar">
      <div className="left-links">
        <img src={logo} alt="Netflix" id="logo" />
        <ul className="nav-wrap">
          <li className="nav-links">Home</li>
          <li className="nav-links">TV Shows</li>
          <li className="nav-links">Movies</li>
          <li className="nav-links">Originals</li>
          <li className="nav-links">Recently Added</li>
          <li className="nav-links">My List</li>
        </ul>
      </div>
      <div className="right-links">
        <i class="fa-solid fa-magnifying-glass"></i>
        <a href="/">KIDS</a>
        <i class="fa-solid fa-bell"></i>
        <div className="acc-box">
          <div className="acc-img"></div>
          <i
            class="fa-solid fa-caret-down"
            onClick={() => {
              setClicked(!clicked);
            }}
          ></i>
          <ul
            className={clicked ? "acc-dropdown active" : "acc-dropdown"}
            onMouseLeave={() => {
              setClicked(false);
            }}
          >
            <li className="dropdown-links">Settings</li>
            <li className="dropdown-links">Sign Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
