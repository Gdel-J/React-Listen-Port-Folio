import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


const About = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Full Stack Web Developer with a unique background in intensive care, applying that same intensity to innovate and elevate web applications and software platforms. Certified in Full Stack Web Development from the University of Central Florida .',
        'Dedicated, solution-driven, and deeply enthusiastic about web application development.',
        'My strengths lie in problem-solving, communication, adaptability, and fostering strong teamwork. I am continuously seeking opportunities to enhance my skills in web development languages and associated technologies.'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      showCursor: true,
      loop: true
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <div className="main-content">
      <span className="content is-medium about-content" ref={el}></span>

      </div>
    </div>
  );
}

export default About;
