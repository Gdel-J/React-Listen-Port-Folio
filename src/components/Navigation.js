import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  // An array of navigation items
  const navItems = ['Home', 'About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/nav-bg.jpg)` }}>
      <ul className="navigation">
        {/* Map through the navigation items and create a list item for each */}
        {navItems.map((item) => (
          <li key={item}>
            {/* Render the navigation item as a button with the slide-in animation */}
            <button
              className={`nav-button ${currentPage === item ? 'active' : 'nav-item-fade-in'}`}
              onClick={() => handlePageChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;