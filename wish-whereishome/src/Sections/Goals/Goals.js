import React from 'react';
import './Goals.css'
import GoalsCard from '../../Components/GoalsCard/GoalsCard';

const Goals = () => {
  return (
    <div className='goals-section'>
        <h3>Goals</h3>
        <div className='goals-content'>
          <GoalsCard number="01" goal="Develop an innovative
real estate
platform
" text="text to be added"/>
          <GoalsCard  number="02" goal="Offer an in-depth and personalized view of interest areas
" text="text to be added"/>
          <GoalsCard  number="03" goal="Allow the customer to explore the areas based on individual preferences
" text="text to be added"/>
          <GoalsCard  number="04" goal="Provide an useful tool for real estate agents
" text="text to be added"/>
        </div>
    </div>
  );
};

export default Goals;
