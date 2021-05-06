import React from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var city = data.address.city;
  }

  return (
    <header id="home">

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? name : null}</TypeWriter>
          </h1>
          <h3>
            {occupation} Based in {city}.
          </h3>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#projectsPage">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
