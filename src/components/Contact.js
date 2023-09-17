import React from 'react';
import ContactCube from './ContactCube'; // Make sure the path is correct

function Contact() {
  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">CONTACT</h2>
      </div>

      <div className="contact-info">
        <ContactCube />
        <div>
          <h3>Please click on the cube's icons or footer's icons to contact Me</h3>
        </div>
      </div>
    </section>
  );
}

export default Contact;
