import React from "react";
import Project from "./Project";

// Define an array of project objects
const projects = [
  {
    id: 0,
    title: "Code-Quizz-Challenge",
    languages: "HTML, CSS, JavaScript",
    image: "/img/Code-quizz-challenge.png",
    description: "This is a quiz application",
    repo: "https://github.com/Gdel-J/Code-quiz-challenge.git",
    live: "https://gdel-j.github.io/Code-quiz-challenge",
  },
  {
    id: 1,
    title: "Work-day-Scheduler",
    languages: "HTML,CSS,JavaScript",
    image: "/img/Work-Day-Scheduler.png",
    description: "This is a day planner app ",
    repo: "https://github.com/Gdel-J/Work-day-Scheduler.git",
    live: "https://gdel-j.github.io/Work-day-Scheduler/",
  },

  {
    id: 2,
    title: "Weather-Dashboard",
    languages: "HTML,CSS,JavaScript,Server Side API",
    image: "/img/Weather-Dashboard.png",
    description:
      "This is an application that allows users to search for a city to get the current weather and 5 day forecast. ",
    repo: "https://github.com/Gdel-J/Weather-Dashboard.git",
    live: "https://gdel-j.github.io/Weather-Dashboard",
  },
  {
    id: 3,
    title: "Find-and-Stream",
    languages: "HTML,CSS,JavaScript,Server side API",
    image: "/img/Find-and-Stream.png",
    description:
      "This application was built in order to allow users to search and find a streaming platform for a movie. ",
    repo: "https://github.com/gmgabrie/find-and-stream.git",
    live: "https://gmgabrie.github.io/find-and-stream/",
  },
  {
    id: 4,
    title: "MVC-Tech-Blog",
    languages: "HTML,CSS,JavaScript,MVC",
    image: "/img/MVC-note-taker.png",
    description:
      "This is a full-stack CMS-style blog site where users can publish posts",
    repo: "https://github.com/Gdel-J/MVC-Tech-Blog.git",
    live: "https://mymvctechblog39.herokuapp.com/",
  },
  {
    id: 5,
    title: "Sport-Spot",
    languages: "CSS,JavaScript,MySql,Sequelize,Express.js",
    image: "/img/Sport-Spot.png",
    description:
      "This is a full-stack CMS-style site where users can access to the last NBA game results and add comments about it",
    repo: "https://github.com/restas13/sport-spot.git",
    live: "https://sport-spot-group7.herokuapp.com/",
  },
  {
    id: 6,
    title: "PWA-textEditor-Challenge",
    languages: "HTML,CSS,JavaScript,PWA",
    image: "/img/Just-Another-text-Editor.png",
    description:
      " This  application: J.A.T.E is a Progressive Web Application (PWA),  text editor, that runs in the browser,online or offline the user can create notes the user can retrieve them for later use.",
    repo: "https://github.com/Gdel-J/PWA-textEditor-Challenge.git",
    live: "https://pwa-texteditor-challenge777-17576331dd21.herokuapp.com/",
  },
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
