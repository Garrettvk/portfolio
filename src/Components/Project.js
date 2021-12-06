import React from "react";
import "./Project.css";

function Project({ title, projectUrl, image }) {
    return (
        <div id="projectsPage">
            <h1>{title}</h1>
            <a href={projectUrl} target='_blank'>
                <img src={image} alt="" />
            </a>
        </div>
    );
}

export default Project;
