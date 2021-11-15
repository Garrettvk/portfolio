import React from "react";
import Project from "./Project";
import './ProjectsPage.css'

// project photos
import fmGallery from './../images/FM-Gallery.png'
import lcfm from './../images/lcfm.png'
import greaterWorks from './../images/greaterWorks.png'

const ProjectsPage = () => {

  return (
    <div className='projectsPage'>

      {/* FM Gallery */}
      <Project
        title='FM Gallery'
        image={fmGallery}
        projectUrl='https://fmgallery.net/'
      />

      {/* LiveCode for FM */}
      <Project
        title='LiveCode for FM'
        image={lcfm}
        projectUrl='https://clone-9e900.web.app/'
      />

      {/* Greater Works */}
      <Project
        title='Greater Works Construction'
        image={greaterWorks}
        projectUrl='http://greaterworksconstruction.com/'
      />
    </div>
  );
};

export default ProjectsPage;
