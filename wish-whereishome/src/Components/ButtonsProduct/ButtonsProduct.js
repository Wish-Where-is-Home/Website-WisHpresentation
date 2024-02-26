import React from 'react';
import './ButtonsProduct.css';

const ButtonsProduct = ({ text, active, handleClick }) => {
  return (
    <button className={`product-button ${active ? 'active' : ''}`} onClick={handleClick}>
      <span>{text}</span>
    </button>
  );
};

export default ButtonsProduct;