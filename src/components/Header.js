import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
  const navItems = ['Home', 'About', 'Portfolio', 'Contact', 'Resume'];
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (event, item) => {
    event.stopPropagation();
    setCurrentPage(item);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Gdel-J?tab=repositories"
          >
            <span className="content is-large">
              <div className="header-name-container">
                <span className="header-name">GERARD DEL VECCHIO</span>
              </div>
            </span>
          </a>
        </div>
        <ul className="navigation">
          {navItems.map((item, index) => (
            <li key={item}>
              <button
                className={`nav-button ${currentPage === item ? 'active' : ''} ${index !== 0 ? 'slide-in' : ''} ${item === 'Home' ? 'home-button' : ''}`}
                onClick={(event) => handlePageChange(event, item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
