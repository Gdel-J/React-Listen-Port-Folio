import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  // An array of navigation items
  const navItems = ['Home','About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul className="navigation">
        {/* Map through the navigation items and create a list item for each */}
        {navItems.map((item) => (
          <li key={item}>
            {/* Render the navigation item as a button */}
            <button
              // Add the active class to the button if it matches the current page
              className={`nav-button ${currentPage === item ? 'active' : ''}`}
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