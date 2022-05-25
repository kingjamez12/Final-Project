import React from "react";
import "../styles/Hero.css";
import logo from "../assets/cartoon-man-computer.png";

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="hero-flex">
        <div className="hero-image-box">
          <img className="hero-image" src={logo} alt="man on computer" />
        </div>
        <div className="hero-text-box">
          <h1 className="title"> About Me </h1>
          <p className="text">
            Hello World! My name is Charles James. I am 33 years old. Born in
            Guyana, raised in NYC since 6 years old. I discovered my passion for
            Computer Science when I happened upon Python. Every day since then I
            have been on a wonderful journey of learning more about computer
            Science as a whole. As of right now I am currently studying Web
            development and Data Science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
