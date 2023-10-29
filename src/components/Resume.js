import React from "react";

function Resume() {
  return (
    <div className="columns fade-in">
      {/* Column for the resume */}
      <div className="column slide-in-left">
        <p className="content is-medium">RESUME</p>
        <hr />

        {/* Button to download the resume */}
        <a
          className="button is-primary"
          href={
            process.env.PUBLIC_URL +
            "/Gerard Del Vecchio resume octobre 2023 .pdf"
          }
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>

        {/* Button to view the resume on Google Drive */}
        <a
          className="button is-link google-drive-link"
          href="https://drive.google.com/file/d/1UxQyZZgly_7ggL_vftbgpa0oQITnxN7A/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: "10px" }} // Added a margin for spacing between buttons
        >
          <span className="icon">
            <i className="fas fa-external-link-alt"></i>
          </span>
          <span>View on Google Drive</span>
        </a>
      </div>

      {/* Column for the skills */}
      <div className="column slide-in-right">
        <p className="content is-medium">SKILLS</p>
        <hr />

        {/* List of proficiencies */}
        <ul>
          <li className="skill-item">HTML, CSS, Javascript</li>
          <li className="skill-item">OpenAPI, JSON</li>
          <li className="skill-item">SQL, Sequelize</li>
          <li className="skill-item">React, Node.js</li>
          <li className="skill-item">MongoDb, Mongoose</li>
          <li className="skill-item">MERN</li>
          <li className="skill-item">Github, VS Code</li>
          <li className="skill-item">Bootstrap</li>
          <li className="skill-item">jQuery</li>
          <li className="skill-item">Web API</li>
          <li className="skill-item">OOP (Object-Oriented Programming)</li>
          <li className="skill-item">Server Side API</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
