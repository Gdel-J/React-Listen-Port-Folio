import React from 'react';

const About = () => {
    return (
    <div>
      <p className="content is-medium">Full stack Web developer</p>
      
      <img className="my-own-picture" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Gerard DEL VECCHIO"/>
      <p className="content is-italic mt-4">
        Hi, I am Gerard, Full Stack Web developer .
      </p>
      <p className="content">
       Feel free to navigate to the different part of that Portfolio!!
      </p>
    </div>
  );
}

export default About;
