// Navbar.js
import React from 'react';

function Navbar() {
  const linkStyle = {
    marginRight: '4rem',
    
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-center">
      <a href="/" style={linkStyle}> <b> Home </b></a>
      <a href="/about" style={linkStyle}><b> About </b></a>
      <a href="/contact" style={linkStyle}><b> Contact </b></a>
      <a href="/projects" style={linkStyle}><b> Projects </b></a>
    </nav>
  );
}

export default Navbar;