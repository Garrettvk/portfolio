import React from "react";
import particlesConfig from "../config/particle-config";
import Particles from "react-particles-js";

const Header = ({ data }) => {
    if (data) {
        var name = data.name;
        var occupation = data.occupation;
        var city = data.address.city;
    }

    return (
        <header id="home">
            <Particles params={particlesConfig} />
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">
                        {name ? name : null}
                    </h1>
                    <h3>
                        {occupation} based in {city}, California.
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
