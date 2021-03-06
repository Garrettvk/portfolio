import React from "react";
import TextLoop from "react-text-loop";
import "./SliderAnimation.css";

const SliderAnimation = () => {
  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="background">
        <video id="background-video" autoPlay loop muted poster="/img/background-video-poster.webp">
          <source src="/video/background-video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>
      {/* End bg */}

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
              Hello, my name is Garrett van Kranenburg and I make computers do
              amazing things. My entire life I have been passionate about art.
              Like many people in our community I am a musician turned web
              developer. If you are searching for someone who is hard working,
              easy to get along with and constantly improving, look no
              further.
            </p>

            <div
              className="beny_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a className="anchor seePortfolio" href="#portfolio">
                <span className="wrapper">
                  <span className="first">See Portfolio</span>
                  <span className="second">See Portfolio</span>
                </span>
              </a>
              <a
                className="anchor"
                href="https://my.visualcv.com/garrett-van-kranenburg/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="wrapper">
                  <span className="first">View CV</span>
                  <span className="second">View CV</span>
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
