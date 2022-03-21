import { SkillIcons } from "../../components/skillIcons/SkillIcons";
import React from "react";
import Slider from "../../components/slider/SliderAnimation";
import HTMLEmails from "../../components/portfolio/HTMLEmails";
import LandingPages from "../../components/portfolio/LandingPages";

const HomeLightAnimation = () => {
  document.body.classList.add("light");
  return (
    <div className="home-light">
      {/* demo show wrapper  */}

      <Slider />
      {/* End Slider */}

      <SkillIcons />


      {/* PORTFOLIO */}
      <div className="beny_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Portfolio</span>
            <h2>HTML Emails</h2>
            <p>
              Here are 3 projects showcasing my skills as an HTML Email
              Developer.
            </p>
          </div>
          {/* End beny_tm_title */}
          <HTMLEmails />
          <div className="beny_tm_title_holder">
            <h2>Landing Pages</h2>
            <p>A landing page for an eCommerce store.</p>
          </div>
          <LandingPages />
        </div>
      </div>
      {/* /PORTFOLIO */}
    </div>
  );
};

export default HomeLightAnimation;
