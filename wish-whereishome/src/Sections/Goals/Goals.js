import React from 'react';
import './Goals.css'
import GoalsCard from '../../Components/GoalsCard/GoalsCard';

const Goals = () => {
  return (
    <div className='goals-section'>
        <h3>Goals</h3>
        <div className='goals-content'>
          <GoalsCard number="01" goal="Development of an innovative platform for location assessment."/>
          <GoalsCard  number="02" goal="Creation of a social support module to aid in housing search." text="text to be added"/>
        </div>
    </div>
  );
};

export default Goals;
