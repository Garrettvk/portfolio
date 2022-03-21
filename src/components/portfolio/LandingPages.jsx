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
                href="http://bigdataspecialties.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Fash</h3>
                <span>Fashion E-comm Landing Page</span>
              </a>
              <a
                href="http://bigdataspecialties.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img
                src="img/portfolio/landingPage1.webp"
                alt="promotional email"
                onClick={() => setOpen(true)}
              />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
