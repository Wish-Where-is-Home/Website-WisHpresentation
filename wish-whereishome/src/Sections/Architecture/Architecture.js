import React from 'react';
import './Architecture.css';
import imgarquitetura from '../../Assets/Arquitetura.png';

const Architecture = () => {
  return (
    <div id="architecture" className='Architecture-section'>
      <div className='Architecture-content'>
            <div className='row-Architecture-h3'>
              <h3>/ Architecture</h3>
            </div>
            <div className='row-presentations-p'>
                <p>Our System Architecture </p>
            </div>
            <img src={imgarquitetura} alt='arquitetura'/>
        </div>
    </div>
  );
};

export default Architecture;
