import React from "react";

import styles from "../styles/family-styles/family.css";

import { FaFacebookMessenger } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import Fade from "react-reveal/Fade";

const FamilyScreen = () => {
  return (
    <div className="family-screen">
      <div className="container">
        <div className="family-content">
          <Fade bottom>
            <h2 className="family-heading">Join The Family</h2>
          </Fade>
          <Fade bottom>
            <p className="family-paragraph">
              We will do our work quickly, efficiently and on time. Don't worry
              about the cost. Trust us.
            </p>
          </Fade>
          <Fade bottom>
            <form className="form">
              <input
                className="email-input"
                placeholder="example@gmail.com"
              ></input>
              <textarea
                placeholder="Your message..."
                className="message"
              ></textarea>
              <button className="form-button">Write to drekt</button>
            </form>
          </Fade>
          <Fade bottom>
            <p className="logo">Logo</p>
          </Fade>
          <Fade bottom>
            <footer className="footer">
              <div className="social-media">
                <FaFacebookMessenger className="facebook"></FaFacebookMessenger>
                <FaTelegram className="telegram"></FaTelegram>
              </div>
              <p className="email">help@help.com</p>
            </footer>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FamilyScreen;
