import React from "react";
import Social from "../Social";
import TextLoop from "react-text-loop";
import "./SliderAnimation.css"

const SliderAnimation = () => {
  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              "https://cutewallpaper.org/23/abstract-white-wallpaper-hd-for-android/714716208.jpg"
            })`,
          }}
        ></div>
        <div className="overlay"></div>
      </div>
      {/* End bg */}

      <div className="go-to go-to-next">
        <a href="#about">
          <span></span>
        </a>
      </div>
      {/* End animated goto button */}

      <div className="container">
        <div className="content">
          <div className="content_inner">
            <h3 className="name" data-aos="fade-up" data-aos-duration="1200">
              Hi! I'm Garrett
            </h3>
            <h1
              className="job"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="50"
            >
              <TextLoop>
                <p className="loop-text lead"> Developer</p>
              </TextLoop>
              <br /> <span>Based In San Luis Obisbo, CA.</span>
            </h1>
            <p
              className="text"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
Hello, my name is Garrett van Kranenburg. I am a developer from San Luis Obispo, California. I work at Richard Carlton Consulting in Los Osos, California. Currently I am working on updating and creating new web pages for products and services offered by Richard Carlton Consulting.
            </p>
            <div
              className="mobile_social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <Social />
            </div>
            {/* End .social */}

            <div
              className="beny_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a className="anchor" href="#about">
                <span className="wrapper">
                  <span className="first">See Portfolio</span>
                  <span className="second">See Portfolio</span>
                </span>
              </a>
            </div>
            {/* End beny_tm_button */}
          </div>
        </div>
      </div>
      {/* End .container */}

    </div>
    //HERO
  );
};

export default SliderAnimation;
