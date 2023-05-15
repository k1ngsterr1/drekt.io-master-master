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

import Fade from "react-reveal/Fade";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="container">
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
                <div className="orange-point zero">
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
                <div className="orange-point three">
                  <span className="circle three-c"></span>
                </div>
                <span className="orange-text three-t">Regular guests</span>
                <div className="orange-point two">
                  <span className="circle two-c"></span>
                </div>
                <span className="text two-t">House tour</span>
              </Fade>
            </div>
            <div className="model-container">
              <Fade bottom>
                <img className="model-pc" src={smoothBall}></img>
                <img className="family-line" src={familyLine}></img>
                <div className="orange-point one">
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
    </div>
  );
};

export default MainScreen;
