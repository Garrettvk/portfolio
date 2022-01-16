import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderAnimation";
import About from "../../components/about/AboutAnimation";
import Service from "../../components/service/ServiceAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/BlogAnimation";
import Contact from "../../components/Contact";
import Footer from "../../components/footer/Footer";
import Address from "../../components/Address";

const HomeLightAnimation = () => {
  document.body.classList.add("light");
  return (
    <div className="home-light">

      {/* demo show wrapper  */}

      <Header />
      {/* End Header */}

      <Slider />
      {/* End Slider */}

      {/* PORTFOLIO */}
      <div className="beny_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Portfolio</span>
            <h2>My Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p>
          </div>
          {/* End beny_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* /PORTFOLIO */}

    </div>
  );
};

export default HomeLightAnimation;
