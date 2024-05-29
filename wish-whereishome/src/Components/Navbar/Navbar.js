import React from 'react';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-scroll';


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
                    <li><Link to="home" spy={true} smooth={true} duration={500} className="navbar-link"onClick={toggleNavbar}>Home</Link></li>
                    <li><Link to="promovideo" spy={true} smooth={true} duration={500} className="navbar-link"onClick={toggleNavbar}>Promovideo</Link></li>
                    <li><Link to="product" spy={true} smooth={true} duration={500} className="navbar-link"onClick={toggleNavbar}>Product</Link></li>
                    <li><Link to="documentation" spy={true} smooth={true} duration={500} className="navbar-link"onClick={toggleNavbar}>Documentation</Link></li>
                    <li><Link to="presentations" spy={true} smooth={true} duration={500} className="navbar-link"onClick={toggleNavbar}>Presentations</Link></li>
                    <li><Link to="architecture" spy={true} smooth={true} duration={500} className="navbar-link"onClick={toggleNavbar}>Architecture</Link></li>
                    <li><Link to="timeline" spy={true} smooth={true} duration={500} className="navbar-link"onClick={toggleNavbar}>Timeline</Link></li>
                    <li><Link to="team" spy={true} smooth={true} duration={500} className="navbar-link"onClick={toggleNavbar}>Team</Link></li>
                    <li><Link to="footer" spy={true} smooth={true} duration={500} className="navbar-link"onClick={toggleNavbar}>Contact</Link></li>
                </ul>
            </div>
            <div className='navbar-github'>
                <a href="https://github.com/Wish-Where-is-Home" className="github-icon" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href=" https://drive.google.com/drive/folders/1fGVwnjm3JD7zJtq1r_-hLAYAm13eImE8?usp=sharing" className="github-icon" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGoogleDrive} />
                </a>
            </div>   
        </div>
    </nav>
  );
};

export default Navbar;
