import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import ScrollDownButton from '../../Components/ScrollDownButton/ScrollDownButton';


function Home() {
  return (
    <div className='home-section'>
      <div className='home-titles'>
        <h3 className='home-title2'>WisH</h3>
        <h2 className='home-title'>Where is Home</h2>
      </div>
      <div className='home-options'>
        <span>
            <FontAwesomeIcon  className='icons-home' icon={faCircle} />
            <p>Product</p>
          </span>
          <span>
            <FontAwesomeIcon  className='icons-home' icon={faCircle} />
            <p>Team</p>
          </span>
          <span>
            <FontAwesomeIcon  className='icons-home' icon={faCircle} />
            <p>Contact</p>
          </span>
        </div>
        <ScrollDownButton/>
      </div>
  );
}

export default Home;
