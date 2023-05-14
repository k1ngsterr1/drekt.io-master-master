import React from "react";

import styles from "../styles/tour-styles/tour.css";

// Assets
import livingRoom from "../assets/living_room.png";
import bathRoom from "../assets/bathroom.png";
import bedRoom from "../assets/bedroom.png";
import hallway from "../assets/hallway.png";
import dressingRoom from "../assets/dressing_room.png";
import kitchen from "../assets/kitchen.png";

import lineBlue from "../assets/blue_step.svg";
import lineOrange from "../assets/orange_step.svg";

import model from "../assets/pc_model.png";
import mainModel from "../assets/main_orange.png";

import Fade from "react-reveal/Bounce";

const HouseScreen = () => {
  return (
    <div className="house-screen">
      <div className="container">
        <div className="tour-content">
          <Fade bottom>
            <h2 className="tour-heading">HOUSE TOUR</h2>
            <p className="tour-paragraph">It all starts small</p>
          </Fade>
          <div className="rooms">
            {/* Hallway */}
            <Fade bottom>
              <span className="line"></span>
            </Fade>
            <div className="room-description">
              <Fade bottom>
                <h5 className="room-name">Hallway</h5>
              </Fade>
              <Fade bottom>
                <p className="room-paragraph">
                  The initial research efforts in the project definition start
                  with the project discovery phase, where our business analysts
                  understand the project's purpose and identify the needs of
                  your target audience. It helps them choose the right
                  technology stack, define the deliverables, and estimate the
                  timelines and resources.
                </p>
              </Fade>
              <Fade bottom>
                <img className="room" src={hallway}></img>
              </Fade>
            </div>
            {/* Living Room */}
            <Fade bottom>
              <span className="line"></span>
            </Fade>
            <div className="room-description">
              <Fade bottom>
                <h5 className="room-name">Living Room</h5>
              </Fade>
              <Fade bottom>
                <p className="room-paragraph">
                  After understanding user audience needs, our web designers
                  incorporate these requirements in Ul design. Once the app's
                  look and feel with project stakeholders is finalized, we
                  breathe life into it using front-end coding.
                </p>
              </Fade>
              <Fade bottom>
                <img className="room" src={livingRoom}></img>
              </Fade>
            </div>
            {/* Dressing Room */}
            <Fade bottom>
              <span className="line"></span>
            </Fade>
            <div className="room-description">
              <Fade bottom>
                <h5 className="room-name">Dressing Room</h5>
              </Fade>
              <Fade bottom>
                <p className="room-paragraph">
                  In this stage, we implement the application logic on the back
                  end. For this, we use proven frameworks to write fast and
                  quality codes.
                </p>
              </Fade>
              <Fade bottom>
                <img className="room" src={dressingRoom}></img>
              </Fade>
            </div>
            {/* Kitchen */}
            <Fade bottom>
              <span className="line"></span>
            </Fade>
            <div className="room-description">
              <Fade bottom>
                <h5 className="room-name">Kitchen</h5>
              </Fade>
              <Fade bottom>
                <p className="room-paragraph">
                  We set up APIs for web app integration to ensure seamless data
                  synchronization across third-party systems.
                </p>
              </Fade>
              <Fade bottom>
                <img className="room" src={kitchen}></img>
              </Fade>
            </div>
            {/* Shower Room */}
            <Fade bottom>
              <span className="line"></span>
            </Fade>
            <div className="room-description">
              <Fade bottom>
                <h5 className="room-name">Shower Room</h5>
              </Fade>
              <Fade bottom>
                <p className="room-paragraph">
                  We put your mind at ease by extending hot fixes within 24
                  hours to resolve any issues in the functionality of your web
                  application.
                </p>
              </Fade>
              <Fade bottom>
                <img className="room" src={bathRoom}></img>
              </Fade>
            </div>
          </div>
          <div className="rooms-computer">
            <div className="step-one zero-s">
              <img className="arrow-blue first" src={lineBlue}></img>
              <div className="hallway-container">
                <div className="hallway-heading-container">
                  <span className="one">01</span>
                  <h6 className="hallway-heading">Hallway</h6>
                </div>
                <p className="hallway-paragraph zero-p">
                  The initial research efforts in the project definition start
                  with the project discovery phase, where our business analysts
                  understand the project's purpose and identify the needs of
                  your target audience. It helps them choose the right
                  technology stack, define the deliverables, and estimate the
                  timelines and resources.
                </p>
              </div>
            </div>
            <img className="model one-m" src={model}></img>
            <div className="step-two">
              <div className="living-container">
                <div className="living-heading-container">
                  <h6 className="living-heading">Living room</h6>
                  <span className="two">02</span>
                </div>
                <p className="living-paragraph">
                  After understanding user audience needs, our web designers
                  incorporate these requirements in Ul design. Once the
                  app'slook and feel with project stakeholders is finalized, we
                  breathe life into it using front-end coding.
                </p>
              </div>
              <img className="arrow-orange first" src={lineOrange}></img>
            </div>
            <img className="model two-m" src={model}></img>
            <div className="step-one">
              <img className="arrow-blue third" src={lineBlue}></img>
              <div className="hallway-container third-c">
                <div className="hallway-heading-container">
                  <span className="one">03</span>
                  <h6 className="hallway-heading">Dressing room</h6>
                </div>
                <p className="hallway-paragraph">
                  In this stage, we implement the application logic on the back
                  end. For this, we use proven frameworks to write fast and
                  quality codes.
                </p>
              </div>
            </div>
            <img className="model three-m" src={model}></img>
            <div className="step-two">
              <div className="living-container fourth-c">
                <div className="living-heading-container">
                  <h6 className="living-heading">Kitchen</h6>
                  <span className="two">04</span>
                </div>
                <p className="living-paragraph">
                  We set up APIs for web app integration to ensure seamless data
                  synchronization across third-party systems.
                </p>
              </div>
              <img className="arrow-orange fourth-line" src={lineOrange}></img>
            </div>
            <img className="model fourth-m" src={model}></img>
            <div className="step-one">
              <img className="arrow-blue fifth" src={lineBlue}></img>
              <div className="hallway-container fifth-c">
                <div className="hallway-heading-container">
                  <span className="one">05</span>
                  <h6 className="hallway-heading">Shower Room</h6>
                </div>
                <p className="hallway-paragraph">
                  We put your mind at ease by extending hot fixes within 24
                  hours to resolve any issues in the functionality of your web
                  application.
                </p>
              </div>
            </div>
            <img className="model fifth-m" src={model}></img>
            <div className="step-two">
              <div className="living-container sixth-c">
                <div className="living-heading-container">
                  <h6 className="living-heading">Bedroom</h6>
                  <span className="two">06</span>
                </div>
                <p className="living-paragraph">
                  We understand that a well-maintained web app attracts business
                  and retains customers for a more extended period. Therefore,
                  we continually support and advance your software by adding new
                  features Lo align with your dynamic business needs.
                </p>
              </div>
              <img className="arrow-orange sixth-line" src={lineOrange}></img>
            </div>
            <img className="main-model" src={mainModel}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseScreen;
