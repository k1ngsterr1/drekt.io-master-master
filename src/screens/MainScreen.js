import React from "react";

// Assets

import aboutLine from "../assets/about-family-line.svg";
import houseLine from "../assets/house-tour-line.svg";
import regularLine from "../assets/guests-line.svg";
import familyLine from "../assets/join-family-line.svg";

import heading from "../assets/heading.svg";
import threeD from "../assets/black.png";
import threeDPC from "../assets/pc_model.png";
import ball from "../assets/ball.png";
import smoothBall from "../assets/smooth_ball.png";

import styles from "../styles/main-styles/main.css";

import { useNavigate } from "react-router-dom";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

const MainScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="main-screen" id="main">
      <div className="m-container main-c">
        <main className="main-content">
          <Fade bottom>
            <img className="heading" src={heading}></img>
          </Fade>
          {/* Тут должна быть 3д модель */}
          <Fade bottom>
            <img className="model" src={threeD}></img>
          </Fade>
          <div className="pc-models-container">
            <div className="model-container">
              <Fade bottom>
                <img className="model-pc" src={ball}></img>
                <img className="about-line" src={aboutLine}></img>
                <div
                  className="orange-point zero"
                  onClick={() => (window.location.href = "#about")}
                >
                  <span className="circle zero-c"></span>
                </div>
                <span className="text zero-t">About the family</span>
              </Fade>
            </div>
            <div className="model-container">
              <Fade bottom>
                <img className="model-pc hex" src={threeDPC}></img>
                <img className="house-line" src={houseLine}></img>
                <img className="regular-line" src={regularLine}></img>
                <div
                  className="orange-point three"
                  onClick={() => (window.location.href = "#guest")}
                >
                  <span className="circle three-c"></span>
                </div>
                <span className="orange-text three-t">Regular guests</span>
                <div
                  className="orange-point two"
                  onClick={() => (window.location.href = "#house")}
                >
                  <span className="circle two-c"></span>
                </div>
                <span className="text two-t">House tour</span>
              </Fade>
            </div>
            <div className="model-container">
              <Fade bottom>
                <img className="model-pc" src={smoothBall}></img>
                <img className="family-line" src={familyLine}></img>
                <div
                  className="orange-point one"
                  onClick={() => (window.location.href = "#family")}
                >
                  <span className="circle one-c"></span>
                </div>
                <span className="text one-t">Join the family</span>
              </Fade>
            </div>
          </div>
          <Fade bottom>
            <h3 className="model-text">DREKT.IO</h3>
          </Fade>
        </main>
      </div>
      <Bounce delay={5000}>
        <a
          className="phone-link"
          onClick={() => (window.location.href = "#main")}
        >
          <BsFillArrowUpCircleFill className="fill-arrow"></BsFillArrowUpCircleFill>
        </a>
      </Bounce>
    </div>
  );
};

export default MainScreen;
