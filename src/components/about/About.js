import React from "react";
import skillsData from "../../data/data.json";
const skills_data = skillsData[0].skills;
const interests_data = skillsData[1].interests;
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <p>See more about me</p>
        </div>
        <div className="row">
          <div className="col-lg-3" data-aos="fade-right">
            <img src="assets/img/Saigirija.jpg" className="img-fluid" alt="Saigirija" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full &amp; Stack Developer</h3>
            <p className="font-italic">
              Vivacious Having worked in technical engineering for a year, the Full Stack Developer has a focus on developing SQL queries, ETL procedures, and Java development.
              A track record of success in Agile settings, optimizing workflows with GitLab and Continuous Integration/Continuous Delivery (CI/CD) solutions. 
	            Knowledgeable about Kubernetes and cloud computing platforms like Azure, with practical experience in Apex, HTML, JavaScript, and CSS application development. 
              Competent in using technologies such as Heroku, and Twilio to improve data connectivity.
              Proficient in utilizing Lightning pages to create personalized reports and dashboards that provide meaningful insights. Capable of deploying features with ANT, Change Sets, VS Code, GitLab, and Copado.
              Knowledgeable in data migration utilizing Data Loader and Import Wizard.
.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Birthday:</strong> &nbsp; 11 Dec 1999
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Phone:</strong>&nbsp; (+1) 5629391022
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>City:</strong>&nbsp; Cumming, GA 
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Age:</strong>&nbsp; 24
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Degree:</strong>&nbsp;Masters of Science
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Email:</strong>&nbsp;
                    saigirija430@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-content">
          {skills_data.map((skill) => (
            <div className="col-lg-4" key={skill}>
              <div className="progress">
                <span className="skill txt">{skill}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="interests container">
          <div className="section-title">
            <h2>Interests</h2>
          </div>
          <div className="row">
            {interests_data.map((interests) => (
              <div
                className="col-lg-3 col-md-4"
                style={{ marginBottom: 25 }}
                key={interests.name}
              >
                <div className="icon-box">
                  <i
                    className={`${interests.icon}`}
                    style={{ color: `${interests.color}` }}
                  ></i>
                  <h3>{interests.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
