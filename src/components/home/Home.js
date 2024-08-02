import React from "react";

const Home = () => {
  return (
    <header id="header" className="header-tops">
      <div className="container">
        <h1>
          <a href="index.html">Sai Girija Shankaramanchi</a>
        </h1>
        <h2>
          <p className="intro-subtitle"></p>
          <p>
            I'm a passionate <b>Full Stack Developer</b>
            <span className="text-slider-items">
              <b style={{ display: "none" }}>
                Web Designing, UI Design, Photoshop, Photographer,Ms Office
              </b>
            </span>
            <strong className="text-slider"></strong>
          </p>
        </h2>
        {/* <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="header">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="resume">Resume</a>
            </li>
            <li>
              <a href="portfolio">Portfolio</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav> */}
        <div className="social-links">
          
          <a
            href="https://www.linkedin.com/in/sai-girija-shankaramanchi-250938307/"
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icofont-linkedin"></i>
          </a>
          <a
            href="https://github.com/saigirija"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="mailto:saigirija430@gmail.com"
            className="gmail"
            rel="noreferrer"
          >
            <i className="icofont-envelope"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Home;
