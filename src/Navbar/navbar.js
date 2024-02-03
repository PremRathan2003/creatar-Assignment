import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to ='/' className='text'>
          <h1 className="navbar-logo">BookStore</h1>
        </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="text" to='/'><p className="nav-link-item nav-link">Home</p></Link>
        </li>
        <li className="nav-item">
          <Link className="text" to='/marketplace'> 
            <p className="nav-link-item nav-link">Book Marketplace</p></Link>
        </li>
        <li className="nav-item">
            <Link className="text" to ="/submit-poem">
          <p className="nav-link-item nav-link">Poem Submission</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
