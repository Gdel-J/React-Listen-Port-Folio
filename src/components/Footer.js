import React from "react";

function Footer() {
  return (
    // Footer section with the class name "footer"
    <footer className="footer">
      {/* Content section centered in the footer */}
      <div className="content has-text-centered">
        <p>
          {/* Strong emphasis on "My REACT Portfolio" */}
          <strong>My REACT Portfolio</strong> - a React site by{" "}
          {/* Link to my GitHub profile */}
          <a href="https://github.com/Gdel-J" target="_blank" rel="noreferrer">
            Gerard DEL VECCHIO
          </a>
          .
          
          <hr />
          {/* Link to my LinkedIn profile */}
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
