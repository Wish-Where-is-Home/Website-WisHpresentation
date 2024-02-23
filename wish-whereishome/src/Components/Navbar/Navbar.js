import React from 'react';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ isOpen, toggleNavbar }) => {
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className='navbar-div'>
            <div className='navbar-title'>
                <h3>Where is Home</h3>
                <a href="#" onClick={toggleNavbar}>
                    <FontAwesomeIcon className='close' icon={faTimes} />
                </a>
            </div>
            <div className='navbar-content'>
                <ul className='navbar-list'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Presentations</a></li>
                    <li><a href="#">Documents</a></li>
                    <li><a href="#">Architecture</a></li>
                    <li><a href="#">Calendar</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className='navbar-github'>
                <p>Follow Us</p>
                <a href="https://github.com/Wish-Where-is-Home" className="github-icon" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>  
        </div>
    </nav>
  );
};

export default Navbar;
