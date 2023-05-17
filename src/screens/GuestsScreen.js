import React from "react";

// Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import styles from "../styles/guest-styles/guest.css";

import Fade from "react-reveal/Fade";

const GuestsScreen = () => {
  return (
    <div className="guest-screen" id="guest">
      <div className="container">
        <div className="guest-content">
          <Fade bottom>
            <h2 className="guests-heading">Regular Guests</h2>
          </Fade>
          <Fade bottom>
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
                  <div className="card">
                    <p className="who">Who?</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <p className="who">Who?</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <p className="who">Who?</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <p className="who">Who?</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Fade>
          <div className="guests-container">
            <div className="upper-cards">
              <Fade bottom>
                <div className="card">
                  <span className="who">Who?</span>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card">
                  <span className="who">Who?</span>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card">
                  <span className="who">Who?</span>
                </div>
              </Fade>
            </div>
            <div className="lower-cards">
              <Fade bottom>
                <div className="card">
                  <span className="who">Who?</span>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card">
                  <span className="who">Who?</span>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card">
                  <span className="who">Who?</span>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestsScreen;
