import React from "react";
import "./About.css";

const About = ({ data }) => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>
                Hello, my name is Garrett van Kranenburg. I am a web developer
                from San Luis Obispo, California. I am currently working at
                Richard Carlton Consulting in Los Osos, California. Currently I
                am working on updating and creating new web pages for products
                and services.
            </p>

            <p>
                My projects include websites that I have worked on for Richard
                Carlton Consulting as well as a website for a local construction
                company that was made with React. I am currently looking for
                more opportunities in web development and would love to hear
                from you.
            </p>

            <a href={"https://www.youtube.com/watch?v=5qap5aO4i9A"}>
                <i className="fa fa-download"></i>Download Resume
            </a>
        </div>
    );
};

export default About;
