import React from "react";
import './ProjectsPage.css'

const ProjectsPage = () => {

  return (
    <div id="projectsPage">
      <div className="projectsPage__left">
        <h1>Netflix Clone</h1>
        <p>Made with react for the UI, firebase for authentication and database. Stripe for payment processing</p>
        <div className="profjectsPage__buttons">
          <a href="https://netflix-build-76aae.web.app/" target="_blank">Live Demo</a>
          <a href="https://github.com/Garrettvk/netflix-build" target="_blank">Code On Github</a>
        </div>
      </div>
      <div className="projectsPage__right">
        <img src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg" alt="" />
      </div>
    </div>
  );
};

export default ProjectsPage;
