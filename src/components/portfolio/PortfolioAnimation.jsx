import React, { useState } from "react";

const Portfolio = () => {
  const [setOpen] = useState(false);
  const [setOpen2] = useState(false);
  return (
    <>
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
                alt="promotional email"
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
                href="html_emails/trello.html"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Trello</h3>
                <span>Newsletter for trello.com</span>
              </a>
              <a
                href="html_emails/trello.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/portfolio/html-email-project-2.webp"
                  alt="Newsletter email"
                  onClick={() => setOpen2(true)}
                />
              </a>
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

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="html_emails/google_play.html"
              >
                <img
                  src="img/portfolio/html-email-project-3.webp"
                  alt="Transactional email"
                />
              </a>
            </div>
          </li>
          {/* End image popup */}
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
