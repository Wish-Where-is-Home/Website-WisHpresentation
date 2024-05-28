import React, { useState } from 'react';
import './Product.css';
import Context from '../Context/Context';
import Goals from '../Goals/Goals';
import Promovideo from '../../Components/Promovideo/Promovideo';
import Poster from '../../Components/Poster/Poster';
import ButtonsProduct from '../../Components/ButtonsProduct/ButtonsProduct';

const Product = () => {
  const [displayedComponent, setDisplayedComponent] = useState('Context');

  const handleClick = (component) => {
    setDisplayedComponent(component);
  };

  return (
    <div id="product" className='product-section'>
      <div className='product-content'>
        <div className='row-product-h3'>
          <h3>/ Product Overview</h3>
        </div>
        {displayedComponent === 'Context' && <Context />}
        {displayedComponent === 'Goals' && <Goals />}
        {displayedComponent === 'Promovideo' && <Promovideo/>}
        {displayedComponent === 'Poster' && <Poster/>}
      </div>
      <div className='product-buttons-switch'>
        <ButtonsProduct text="Context" active={displayedComponent === 'Context'} handleClick={() => handleClick('Context')} />
        <ButtonsProduct text="Goals" active={displayedComponent === 'Goals'} handleClick={() => handleClick('Goals')} />
        <ButtonsProduct text="Promotional video" active={displayedComponent === 'Promovideo'} handleClick={() => handleClick('Promovideo')} />
        <ButtonsProduct text="Poster" active={displayedComponent === 'Poster'} handleClick={() => handleClick('Poster')} />
      </div>
    </div>
  );
};

export default Product;