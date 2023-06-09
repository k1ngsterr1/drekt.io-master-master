import React from "react";

import { useState } from "react";

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

// Styles

import styles from "../styles/main-styles/main.css";

// Hooks

import {
  HideBetween,
  HideDuring,
  HideOn,
  HideScroll,
} from "react-hide-on-scroll";

import { useNavigate } from "react-router-dom";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import astronaut from "../assets/astronaut.png";

const MainScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="main-screen" id="main">
      <div className="m-container main-c">
        <main className="main-content">
          <HideOn divID={"about"}>
            <div className="mobile-first" id="hide">
              <Fade bottom>
                <img className="heading" src={heading}></img>
              </Fade>
              {/* Тут должна быть 3д модель */}
              <Fade bottom>
                <img className="model" src={threeD}></img>
              </Fade>
              <button className="rekt-button">Let's Rekt</button>
            </div>
          </HideOn>
          <HideOn inverse divID={"about"}>
            <div className="mobile-header">
              <img className="header-model" src={threeD}></img>
              <img className="header-dev" src={heading}></img>
            </div>
          </HideOn>
          <div className="pc-models-container">
            <div className="model-container">
              <Fade bottom>
                <img className="model-pc" src={ball}></img>
              </Fade>
              <Fade bottom delay={1000}>
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
              </Fade>
              <Fade bottom delay={1000}>
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
              </Fade>
              <Fade bottom delay={1000}>
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
          <Fade bottom></Fade>
        </main>
      </div>
      <Bounce delay={5000}>
        <img
          className="astronaut"
          src={astronaut}
          onClick={() => (window.location.href = "#main")}
        ></img>
      </Bounce>
    </div>
  );
};

export default MainScreen;
