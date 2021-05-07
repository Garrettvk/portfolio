import React from "react";
import Project from "./Project";

// project photos
import netflixPic from './../images/netflixPic.png'
import amazon from './../images/amazon.png'
import greaterWorks from './../images/greaterWorks.png'

const ProjectsPage = () => {

  return (
    <div className='projectsPage'>

      {/* Netflix */}
      <Project
        title='Netflix Clone'
        image={netflixPic}
        description={
          <div>
            <div>Made with react for the UI, firebase for user authentication and database. Stripe for payment processing.</div>
            <div>You can login in with:</div>
            <div>username: admin@gmail.com</div>
            <div>password: 123456</div>
            After logging in you can subscribe to a different plan or click the netflix logo to view homepage. When clicking the subscribe button wait a moment for the check out screen to show. Once it loads you can type "42" until the card details are filled out.
          </div>
        }
        projectUrl='https://netflix-build-76aae.web.app/'
        githubUrl='https://github.com/Garrettvk/netflix-build'
      />

      {/* Amazon */}
      <Project
        title='Amazon Clone'
        image={amazon}
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
