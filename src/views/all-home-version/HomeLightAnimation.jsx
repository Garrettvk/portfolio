import React from "react";
import Slider from "../../components/slider/SliderAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";

const HomeLightAnimation = () => {
  document.body.classList.add("light");
  return (
    <div className="home-light">
      {/* demo show wrapper  */}

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
