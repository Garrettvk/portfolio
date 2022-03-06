import React, { useState } from "react";
import SimpleReactLightbox from "simple-react-lightbox";

const Portfolio = () => {
  const [setOpen] = useState(false);
  const [setOpen2] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner video">
              <a
                href="https://www.youtube.com/watch?v=1gyTUHP6ne8"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Drop</h3>
                <span>Promotional email for drop.com</span>
              </a>
              <img
                src="img/portfolio/html-email-project-1.webp"
                alt="Youtube Shoot"
                onClick={() => setOpen(true)}
              />
            </div>
          </li>
          {/* End youtube */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="list_inner video">
              <a
                href="https://player.vimeo.com/video/100171151?h=92d8f1bd0a"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Trello</h3>
                <span>Newsletter for trello.com</span>
              </a>
              <img
                src="img/portfolio/html-email-project-2.webp"
                alt="Vimeo Shoot"
                onClick={() => setOpen2(true)}
              />
            </div>
          </li>
          {/* End vimeo */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="list_inner">
              <a
                className="title"
                target="_blank"
                rel="noopener noreferrer"
                href="html_emails/google_play.html"
              >
                <h3>Google Play</h3>
                <span>Transactional email for Google Play</span>
              </a>

              <a href="html_emails/google_play.html">
                <img
                  src="img/portfolio/html-email-project-3.webp"
                  alt="Dribbble Shoot"
                />
              </a>
            </div>
          </li>
          {/* End image popup */}
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
