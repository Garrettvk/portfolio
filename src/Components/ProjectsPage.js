import React from "react";
import './ProjectsPage.css'

// project photo
import netflixPic from './../images/netflixPic.png'

const ProjectsPage = () => {

  return (
    <div id="projectsPage">
      <div className="projectsPage__left">
        <h1>Netflix Clone</h1>
        <p>Made with react for the UI, firebase for authentication and database. Stripe for payment processing</p>
        <div className="profjectsPage__buttons">
          <a href="https://netflix-build-76aae.web.app/" target="_blank" rel="noreferrer">Live Demo</a>
          <a href="https://github.com/Garrettvk/netflix-build" target="_blank" rel="noreferrer">Code On Github</a>
        </div>
      </div>
      <div className="projectsPage__right">
        <img src={netflixPic} alt="" />
      </div>
    </div>
  );
};

export default ProjectsPage;
