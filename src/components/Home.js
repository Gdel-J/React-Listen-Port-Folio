// Home.js

import React, { useEffect } from 'react';
import { gsap } from "gsap";

const Home = () => {
  
  useEffect(() => {
    gsap.from(".content01", {duration: 2, rotationY: 360, opacity: 0, ease: "power2.out", stagger: 0.5});
  }, []);

  return (
    <div className="home-container">
      <p className="content01 is-medium">Hi! I am Gerard!</p>
      <img className="my-own-picture" src={process.env.PUBLIC_URL + '/img/ForLinkedInProfile05.jpg'} alt="Gerard DEL VECCHIO"/>
      <p className="content01 is-medium">A Full Stack Web developer</p>
      <p className="content02">This is my Portfolio!</p>
    </div>
  );
}

export default Home;
