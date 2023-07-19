import React from "react";
import Project from "./Project";

// Define an array of project objects
const projects = [
  {
    id: 0,
    title: "Project 1",
    languages: "HTML, CSS, JavaScript",
    image: "/path/to/project1.png",
    description: "Description of Project 1",
    repo: "https://github.com/yourusername/project1",
    live: "https://yourproject1url.com/",
  },
  {
    id: 1,
    title: "Project 2",
    languages: "React, Node.js, Express",
    image: "/path/to/project2.png",
    description: "Description of Project 2",
    repo: "https://github.com/yourusername/project2",
    live: "https://yourproject2url.com/",
  },
  // I will my project here
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      {/* Render the Project component and pass the projects array as a prop */}
      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
