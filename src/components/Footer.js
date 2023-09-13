import React from "react";

function Footer() {
  return (
    // Footer section with the class name "footer"
    <footer className="footer">
      {/* Content section centered in the footer */}
      <div className="content has-text-centered">
        
      
        {/* Add GitHub and LinkedIn icons and links */}
        <div className="social-icons">
          <a
            href="https://github.com/Gdel-J"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gerard-del-vecchio-39a231285/"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;