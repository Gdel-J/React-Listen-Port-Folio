
import React, { useEffect, useRef } from "react";

function Project(props) {
  
  const cardRefs = useRef([]);

  useEffect(() => {
    const currentRefs = cardRefs.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    currentRefs.forEach((cardRef) => {
      if (cardRef instanceof Element) {
        observer.observe(cardRef);
      }
    });
    
    return () => {
      currentRefs.forEach((cardRef) => {
        if (cardRef instanceof Element) {
          observer.unobserve(cardRef);
        }
      });
    };
    
  }, []);

  return (
    <div>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project, index) => (
          <div
            className="column is-half lazy-load fade-in"
            key={project.id}
            ref={el => cardRefs.current[index] = el}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img
                      src={process.env.PUBLIC_URL + project.image}
                      alt="Project Screenshot"
                    />
                  </a>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4">{project.title}</p>
                  </div>
                </div>
                <div className="content has-text-left">
                  {project.description}
                  <br />
                  <br />
                  <div className="content is-family-code">
                    Languages: {project.languages}
                    <br />
                  </div>
                  <div className="card">
                    <footer className="card-footer">
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Look at the Repository
                      </a>
                      <a
                        href={project.live}
                        className="card-footer-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Enjoy it on the live site!
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Project;
