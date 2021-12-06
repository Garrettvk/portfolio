import React from "react";
import Project from "./Project";
import './ProjectsPage.css'

// project photos
import fmGallery from './../images/FM-Gallery.png'
import lcfm from './../images/lcfm.png'
import fmTraining from './../images/fmTraining.png'

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
        projectUrl='https://www.fmstartingpoint.com/marketplace/livecodeforfm/index.html'
      />

      {/* Greater Works */}
      <Project
        title='Certification Training'
        image={fmTraining}
        projectUrl='https://fmtraining.tv/certification-training.php'
      />
    </div>
  );
};

export default ProjectsPage;
