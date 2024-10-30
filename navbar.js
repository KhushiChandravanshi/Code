import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      {/* <h1 className="navbar-title">Welcome to Amazon.in</h1> */}
      <nav className="navbar-nav">
        <ul>
            
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          
        </ul>
        
      </nav>
    </div>


                                                    
    </>
  );
};

export default Navbar;