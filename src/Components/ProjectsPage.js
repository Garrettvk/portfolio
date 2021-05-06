import React from "react";
import Project from "./Project";

// project photos
import netflixPic from './../images/netflixPic.png'
import amazon from './../images/amazon.png'

const ProjectsPage = () => {

  return (
    <div className='projectsPage'>

      {/* Netflix */}
      <Project
        title='Netflix Clone'
        image={netflixPic}
        description='Made with react for the UI, firebase for authentication and database. Stripe for payment processing.'
        projectUrl='https://netflix-build-76aae.web.app/'
        githubUrl='https://github.com/Garrettvk/netflix-build'
      />

      {/* Amazon */}
      <Project
        title='Amazon Clone'
        image={amazon}
        description='Made with react for the UI, firebase for authentication and database. Stripe for payment processing.'
        projectUrl='https://clone-9e900.web.app/'
        githubUrl='https://github.com/Garrettvk/amazon-clone'
      />
    </div>
  );
};

export default ProjectsPage;
