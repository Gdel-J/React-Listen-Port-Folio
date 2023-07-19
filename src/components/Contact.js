// Import necessary dependencies
import React, { useState } from 'react';
import { useForm } from '@formspree/react'; // useForm is a custom hook from Formspree for handling form submissions
import { validateEmail } from '../utils/helpers'; // Utility function for email validation

// Define functional component "Contact"
function Contact() {
  // useState and useForm hooks to handle form state and submission
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  // If form submission is successful, display thank you message and Back to About button
  if (state.succeeded) {
    return (
      <div>
        <p>Thanks for reaching out!</p>
        <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
      </div>
    );
  }

  // Handle form field changes
  const handleChange = (e) => {
    setErrorMessage(''); // Clear any existing error messages

    // Perform validation checks
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value); // Check if the email is valid
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`); // Check if the field is empty
      }
    }

    // If there are no validation errors, update the form state
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  // Render the form
  return (
    <div>
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="field">
          <label className="label" htmlFor="name">Name</label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>

        {/* Email field */}
        <div className="field">
          <label className="label" htmlFor="email">Email Address</label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>

        {/* Message field */}
        <div className="field">
          <label className="label" htmlFor="message">Message</label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>

        {/* Display any error message */}
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}

        {/* Submit button */}
        <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
      </form>
    </div>
  );
}

// Export "Contact" component
export default Contact;
