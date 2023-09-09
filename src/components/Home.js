import React from 'react';

const Home = () => {
    return (
    <div>
      <p className="content01 is-medium">Hi! I am Gerard! A Full Stack Web developer</p>
      
      <img className="my-own-picture" src={process.env.PUBLIC_URL + '/img/ForLinkedInProfile05.jpg'} alt="Gerard DEL VECCHIO"/>
      <p className="content is-italic mt-4">
        
      </p>
      <p className="content02">
       Welcome to my Portfolio!!
      </p>
    </div>
  );
}

export default Home;