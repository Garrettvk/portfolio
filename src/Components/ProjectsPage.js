import React from "react";
import Project from "./Project";

// project photos
import fmGallery from './../images/FM-Gallery.png'
import lcfm from './../images/lcfm.png'
import greaterWorks from './../images/greaterWorks.png'
import wolfsToolBox from './../images/wolfs-toolbox.png'

const ProjectsPage = () => {

  return (
    <div className='projectsPage'>

      {/* FM Gallery */}
      <Project
        title='FM Gallery'
        image={fmGallery}
        description={
          <div>
            Landing pages for products created by RCC. These websites were designed by me using HTML and CSS. I created my own graphics with Photoshop, wrote copy for written content, utilized code from the company code base as well wrote code from scratch when needed. These pages are fully responsive and used by RCC to showcase and sell their software.
          </div>
        }
        projectUrl='https://fmgallery.net/'
      />

      {/* LiveCode for FM */}
      <Project
        title='LiveCode for FM'
        image={lcfm}
        description={
          <div>
            Made with react for the UI, firebase for user authentication and database. Stripe for payment processing. Items can be added and removed from cart and then purchased by typing "42" until the card details are filled in.
            <div>Logging in is optional.</div>
            <div>You can login in with:</div>
            <div>username: admin@gmail.com</div>
            <div>password: 123456</div>
          </div>
        }
        projectUrl='https://clone-9e900.web.app/'
        githubUrl='https://github.com/Garrettvk/amazon-clone'
      />

      {/* Wolf's Toolbox */}
      <Project
        title="Wolf's Toolbox"
        image={wolfsToolBox}
        description=''
        projectUrl='https://fmstartingpoint.com/marketplace/wolftoolbox/'
      />

      {/* Greater Works */}
      <Project
        title='Greater Works Construction'
        image={greaterWorks}
        description='Website created for local construction company. Built with mostly html and css. The slideshow and contact form were made with react. The email functionality was made with the email-js library.'
        projectUrl='http://greaterworksconstruction.com/'
        githubUrl='https://github.com/Garrettvk/Greater-Works-Website/'
      />
    </div>
  );
};

export default ProjectsPage;
