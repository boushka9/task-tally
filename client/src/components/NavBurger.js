// HOPEFULLY ON SMALL SCREENS

import React, { useState } from 'react';

const Navburger = () => {
  // Initially set to false while menu is closed
  const [isNavOpen, setNavOpen] = useState(false);
  
  // On click conditionally apply the open class to display menu w styling 
  const handleClick = () => {
    console.log('Navburger menu clicked');
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navburger-menu ${isNavOpen ? 'open' : ''}`} onClick={handleClick}> 
      <div href="/" className="navburger-item">To-Dos</div>
      <div href="/to-done" className="navburger-item">To-Dones</div>
      <div href="/scores" className="navburger-item">Scores</div>
      <div href="/login" className="navburger-item">Logout</div> 
      {/* Logout will take you back to the login page */}
    </nav>
  );
};

export default Navburger;

