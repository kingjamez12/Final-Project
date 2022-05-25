import React from "react";
import "../styles/Footer.css";
import portrait from "../assets/Work_Pic.jpg";

const Footer = () => {
  return (
    <div className="footer-flex">
      <div className="foot-box">
        <div className="footer-pic-box">
          <img className="footer-pic" src={portrait} alt="portrait" />
        </div>
        <div className="link-box">
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
      </div>
    </div>
  );
};

export default Footer;
