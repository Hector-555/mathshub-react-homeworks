/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./Nav.css";
import burger from "./icons/Rectangle.png";

function Nav() {
  return (
    <div className="nav-container">
      <button type="button" className="nav__menu-btn">
        <img src={burger} alt="menu" />
      </button>

      <div className="switch-container">
        <span className="switch-train" >TRAIN</span>
        <span className="switch-play">PLAY</span>
        <label id="switch" className="switch">
          <input type="checkbox" id="slider" />
          <span className="slider round" />
        </label>
      </div>
    </div>
  );
}

export default Nav;
