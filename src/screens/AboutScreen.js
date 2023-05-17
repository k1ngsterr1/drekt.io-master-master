import React from "react";
import styles from "../styles/about-styles/about.css";

// Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Assets
import model from "../assets/orange.png";
import modelPC from "../assets/model_orange_pc.png";
import icon from "../assets/icon.svg";

import Fade from "react-reveal/Fade";

const AboutScreen = () => {
  function Card(props) {
    return (
      <div className="card-container">
        <h5 className="card-heading">{props.heading}</h5>
        <img className="card-icon" src={icon}></img>
        <p className="card-paragraph">{props.paragraph}</p>
      </div>
    );
  }

  function NextCard(props) {
    return (
      <div className="card-container-next">
        <h5 className="card-heading">{props.heading}</h5>
        <img className="card-icon" src={icon}></img>
        <p className="card-paragraph">{props.paragraph}</p>
      </div>
    );
  }

  return (
    <div className="about-screen" id="about">
      <div className="container about-container">
        <div className="about-content">
          <Fade bottom>
            <h2 className="about-heading">ABOUT THE FAMILY</h2>
            <p className="about-p">
              There is nothing more important than family. And since you have
              come to our house, we will accept any of your wishes and use the
              best technologies. We are ready to make a unique product of any
              complexity.
            </p>
            <div className="regular-cases">
              <h3 className="reg-cases-heading">About regular cases</h3>
              <div className="swiper-container">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  style={{
                    "--swiper-pagination-color": "#FF6A3A",
                    "--swiper-navigation-color": "#75B9BE",
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-model">
                      <img className="model" src={model}></img>
                      <h4 className="model-heading">Backend</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-model">
                      <img className="model" src={model}></img>
                      <h4 className="model-heading">Frontend</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-model">
                      <img className="model" src={model}></img>
                      <h4 className="model-heading">Mobile</h4>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-model">
                      <img className="model" src={model}></img>
                      <h4 className="model-heading">UI/UX</h4>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="regular-container">
                <div className="model-container">
                  <img className="model" src={modelPC}></img>
                  <h5 className="model-heading">Backend</h5>
                </div>
                <div className="model-container">
                  <img className="model" src={modelPC}></img>
                  <h5 className="model-heading">Frontend</h5>
                </div>
                <div className="model-container">
                  <img className="model" src={modelPC}></img>
                  <h5 className="model-heading">Mobile</h5>
                </div>
                <div className="model-container">
                  <img className="model" src={modelPC}></img>
                  <h5 className="model-heading">UI/UX</h5>
                </div>
              </div>
            </div>
          </Fade>
          <div className="specific-cases">
            <Fade bottom>
              <h3 className="specific-cases-heading">For specific cases</h3>
            </Fade>
            <div className="cards-container">
              <Fade bottom>
                <Card
                  heading="Microservices"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, felis vel interdum porttitor, enim leo"
                ></Card>
              </Fade>
              <Fade bottom>
                <NextCard
                  heading="Microservices"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, felis vel interdum porttitor, enim leo"
                ></NextCard>
              </Fade>
              <Fade bottom>
                <NextCard
                  heading="Microservices"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, felis vel interdum porttitor, enim leo"
                ></NextCard>
              </Fade>
              <Fade bottom>
                <NextCard
                  heading="Microservices"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, felis vel interdum porttitor, enim leo"
                ></NextCard>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
