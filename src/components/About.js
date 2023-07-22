import React from 'react';

const About = () => {
    return (
    <div>
      <p className="content is-medium">Student in the UCF Full Stack Flex bootcamp</p>
      <hr />
      <img className="my-own-picture" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Gerard DEL VECCHIO"/>
      <p className="content is-italic mt-4">
        Hi, I am Gerard, a student in a full stack web Developer bootcamp.
      </p>
      <p className="content">
        I am currently learning the last part (REACT,MERN,STATE) of that boot camp which is very interesting and challenging
      </p>
    </div>
  );
}

export default About;

