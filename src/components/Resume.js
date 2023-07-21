import React from "react";

function Resume() {
  return (
    <div className="columns">
      {/* Column for the resume */}
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        {/* Link to download the resume */}
        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/Gerard Del Vecchio RESUME.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      {/* Column for the skills */}
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />

        {/* List of proficiencies */}
        <ul>
          <li>HTML, CSS, Javascript</li>
          <li>OpenAPI, JSON</li>
          <li>SQL,Sequelize</li>
          <li>React, Node.js, </li>
          <li>MongoDb, Mongoose</li>
          <li>MERN</li>
          <li>Github</li>
         
        </ul>
      </div>
    </div>
  );
}

export default Resume;
