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
          href={process.env.PUBLIC_URL + "/GERARD DEL VECCHIO last updated resume september 2023.pdf"}
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
          href="https://docs.google.com/document/d/1Z-et4KT5OuYqrD1QDwevCp8-R4Zdlpwm8gllhGTQ1AA/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: '10px' }} // Added a margin for spacing between buttons
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
          <li className="skill-item">SQL,Sequelize</li>
          <li className="skill-item">React, Node.js</li>
          <li className="skill-item">MongoDb, Mongoose</li>
          <li className="skill-item">MERN</li>
          <li className="skill-item">Github</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
