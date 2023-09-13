import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  // State variables for the form fields and the error message
  // Initially, all fields and the error message are empty strings
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // This function handles input changes for all the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure the name and value from the event target

    // Based on the input field name, we update the corresponding state variable
    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setMessage(value);
    }
  };

  // This function handles form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh on form submission

    // If email is not valid or userName is empty, we set an error message
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return; // We exit the function if there's an error so the user can correct it
    }

    // If message is empty, we set an error message
    if (!message) {
      setErrorMessage("Message is required.");
      return; // We exit the function if there's an error
    }

    // If there's no error, you can handle the form data as needed.
    // Here, we just clear the form fields and display a success message.
    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("Message sent successfully!"); // You can customize this message.
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">CONTACT</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <p>Want to get into contact?</p>
          <address>
            Winter Springs, FLORIDA
            <br />
            E:{" "}
            <a href="mailto://jessygddelvecchio@gmail.com">
              jessygdelvecchio@gmail.com
            </a>
          </address>
          <p>
            <strong>I'd love to hear your feedback!</strong>
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Me</h3>
          <br />
          <form className="form">
            <label htmlFor="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            <label htmlFor="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="submit" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {/* If there's an error, we display it */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
