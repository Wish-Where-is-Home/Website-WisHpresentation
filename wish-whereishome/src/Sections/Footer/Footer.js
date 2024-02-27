import React from 'react';
import './Footer.css';
import logo from '../../Assets/logo.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-section' >
      <div className='footer-container'>
        <div className='footer-github'>
          <a href="https://drive.google.com/drive/folders/1fGVwnjm3JD7zJtq1r_-hLAYAm13eImE8?usp=drive_link" className='footer-icon1' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGoogleDrive} />
          </a>
          <a href="https://github.com/Wish-Where-is-Home" className='footer-icon' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div  className="footer-content">
          <p className='footer-title'>Projeto em Informatica (3º ano LEI)</p>
          <a href='https://www.ua.pt/' target="_blank" rel="noreferrer" >Universidade de Aveiro</a>
        </div>
        <div className='footer-copyright'>
          <img src={logo} alt='copyright'></img>
          <p>Copyright  © 2024  Where is Home</p>
        </div>
      </div>
    </div>
  );
} 

export default Footer;
