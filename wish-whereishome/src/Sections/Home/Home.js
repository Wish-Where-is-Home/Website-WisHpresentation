import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import ScrollDownButton from '../../Components/ScrollDownButton/ScrollDownButton';
import { Link } from 'react-scroll';

function Home() {
  const [isLoaded] = useState(true);


  return (
    <div id="home" className='home-section'>
      <div className={`home-titles ${isLoaded ? 'fade-in' : ''}`}>
        <h3 className='home-title2'>WisH</h3>
        <h2 className='home-title'>Where is Home</h2>
      </div>
      <div className={`home-options ${isLoaded ? 'fade-in' : ''}`}>
        <Link activeClass="active" smooth spy to="product" className='home-options-div'>
          <div className='home-options-div'>
            <FontAwesomeIcon className='icons-home' icon={faCircle} />
            <p className="special-color">Product</p>
          </div>
          <div>
            <p className='under-options'>what we built</p>
          </div>
        </Link>
        <Link activeClass="active" smooth spy to="team" className='home-options-div'>
          <div className='home-options-div'>
            <FontAwesomeIcon className='icons-home' icon={faCircle} />
            <p className="special-color">Team</p>
          </div>
          <div>
            <p className='under-options'>who we are</p>
          </div>
        </Link>
        <Link activeClass="active" smooth spy to="footer" className='home-options-div'>
          <div className='home-options-div'>
            <FontAwesomeIcon className='icons-home' icon={faCircle} />
            <p className="special-color">Contact</p>
          </div>
          <div>
            <p className='under-options'>get in touch</p>
          </div>
        </Link>
      </div>
      <ScrollDownButton />
    </div>
  );
}

export default Home;
