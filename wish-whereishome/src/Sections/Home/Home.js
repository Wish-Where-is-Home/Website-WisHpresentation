import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import ScrollDownButton from '../../Components/ScrollDownButton/ScrollDownButton';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div className='home-section'>
      <div className='home-titles'>
        <h3 className='home-title2'>WisH</h3>
        <h2 className='home-title'>Where is Home</h2>
      </div>
      <div className='home-options'>
        <Link activeClass="active" smooth spy to="product" className='home-options-div'>
          <div className='home-options-div'>
            <FontAwesomeIcon  className='icons-home' icon={faCircle} />
            <p>Product</p>
          </div>
          <span>
            <p className='under-options'>what we built</p>
          </span>
        </Link>
        <Link activeClass="active" smooth spy to="Team" className='home-options-div'>
          <div className='home-options-div'>
            <FontAwesomeIcon  className='icons-home' icon={faCircle} />
            <p>Team</p>
          </div>
          <div>
            <p className='under-options'>who we are</p>
          </div>
        </Link>
        <Link activeClass="active" smooth spy to="Contact" className='home-options-div'>
          <div className='home-options-div'>
            <FontAwesomeIcon  className='icons-home' icon={faCircle} />
            <p>Contact</p>
          </div>
          <div>
            <p className='under-options'>get in touch</p>
          </div>
        </Link>
      </div>
      <ScrollDownButton/>
    </div>
  );
}

export default Home;