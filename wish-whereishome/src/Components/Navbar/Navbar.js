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
                <a href="#0" onClick={toggleNavbar}>
                    <FontAwesomeIcon className='close' icon={faTimes} />
                </a>
            </div>
            <div className='navbar-content'>
                <ul className='navbar-list'>
                    <li><a href="#0">Home</a></li>
                    <li><a href="#0">Product</a></li>
                    <li><a href="#0">Presentations</a></li>
                    <li><a href="#0">Documents</a></li>
                    <li><a href="#0">Architecture</a></li>
                    <li><a href="#0">Calendar</a></li>
                    <li><a href="#0">Team</a></li>
                    <li><a href="#0">Contact</a></li>
                </ul>
            </div>
            <div className='navbar-github'>
                <p>Follow Us</p>
                <a href="https://github.com/Wish-Where-is-Home" className="github-icon" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>  
        </div>
    </nav>
  );
};

export default Navbar;
