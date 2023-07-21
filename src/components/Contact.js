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
    const { target } = e; // Destructuring the target from the event
    const inputType = target.name; // The name of the input field that triggered the change
    const inputValue = target.value; // The value of the input field that triggered the change

    // Based on the input field name, we update the corresponding state variable
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
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

    // If there's no error, we clear the form fields
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Reach Out</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <p>Want to get into contact?</p>
          <address>
            [Winter Springs], [FLORIDA] <br />
            <br />
            E:{" "}
            <a href="mailto://jessygddelvecchio@gmail.com">
              [jessygddelvecchio@gmail.com]
            </a>
          </address>
          <p>
            <strong>I'd love to hear your feedback!</strong>
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Me</h3>
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
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
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
