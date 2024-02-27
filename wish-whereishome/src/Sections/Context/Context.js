import React from 'react';
import './Context.css'
import logo from '../../Assets/logo.jpg'


const Context = () => {


  return (

    <div className='context-section'>
        <h3>Context</h3>
        <div className='context-content'>
            <div className='context-logo'>
                <img src={logo} alt='Logo'></img>
            </div>
            <div className='context-text'>
              <p>
             The real estate sector is in constant evolution,  propelled by the growing demand of efficient and personalized solutions for the search of properties.
              </p>
              <p>
             The choice of a property goes beyond its physical characteristics; the context of the area where the property is located plays a crucial role in the purchasing decision. 
              </p>
            </div>
        </div>
    </div>
  );
};

export default Context;
