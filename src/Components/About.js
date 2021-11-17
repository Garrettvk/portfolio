import React from "react";
import './About.css'

const About = ({ data }) => {
    return (
        <section id="about">
            <div className="row">
                <h2>About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos magni earum corporis quibusdam, facilis neque,
                    deserunt adipisci soluta explicabo eum maxime molestiae
                    optio iste quas, nesciunt accusamus. Fuga, cum voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis porro eveniet numquam optio enim repudiandae
                    maiores debitis aut dignissimos, mollitia perferendis illo
                    sit. Ducimus dolorem quidem tempore fugiat ratione magni!
                </p>

                <a href={"https://www.youtube.com/watch?v=5qap5aO4i9A"}>
                    <i className="fa fa-download"></i>Download Resume
                </a>
            </div>
        </section>
    );
};

export default About;
