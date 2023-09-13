// Home.js

import React from 'react';


const Home = () => {
  return (
    <div className="home-container"> {/* Use the CSS class for styling */}
      <p className="content01 is-medium">Hi! I am Gerard!</p>
      <img className="my-own-picture" src={process.env.PUBLIC_URL + '/img/ForLinkedInProfile05.jpg'} alt="Gerard DEL VECCHIO"/>
      <p className="content01 is-medium"> A Full Stack Web developer</p>
      <p className="content02">This is my Portfolio!</p>
    </div>
  );
}

export default Home;
