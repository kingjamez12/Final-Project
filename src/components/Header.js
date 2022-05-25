import React from "react";
import "../styles/Header.css";
import school from "../assets/LehmanLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img className="school-logo" src={school} alt="Lehman Logo" />
      </div>
      <div className="nav-bar"></div>
      <li>
        <a href="https://www.github.com/cjames1288"> Github </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/cjames1288"> LinkedIn </a>
      </li>
      <li>
        <a href="github.com/cjames1288"> Github </a>
      </li>
    </div>
  );
};

export default Header;
