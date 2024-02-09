import "./Header.css";
import React from "react";

import { useState } from "react";
import man from "../icons/man.svg";
import sun from "../icons/sun.svg";
import moon from "../icons/moon.svg";

const Header = (props) => {
  return (
    <div className="headerContainer" style={{ backgroundColor: "#313E51" }}>
      <div className="header_Switch_Container">
        <div className="accessibility_Switch_Box">
          <img className="man_Icon" src={man} alt="man_Icon" />
          <span
            className="header_Accessibility_Text"
            style={{ color: " #FFF" }}
          >
            Accessibility
          </span>
        </div>
        <div className="switch_Box">
          <img className="sun" src={sun} />
          <label className="switch">
            <input type="checkbox" onClick={props.handleDark} />
            <span className="slider round"></span>
          </label>
          <img className="moon" src={moon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
