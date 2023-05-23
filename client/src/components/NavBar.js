// ON LARGE SCREENS 

import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navBar'>
      <ul className='navBarList'>
        <li>
          <a href="/todos">To-Do</a>
        </li>
        <li>
          <a href="/to-done">To-Done</a>
        </li>
        <li>
          <a href="/scores">Scores</a>
        </li>
        <li>
          <a href="/">Logout</a>
          {/* Logout ends session and takes user back to login */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
