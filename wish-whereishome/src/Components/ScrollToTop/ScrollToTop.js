import React, { useState, useEffect } from 'react';
import "./ScrollToTop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);
  
    const toggleVisibility = () => {
      const productSection = document.getElementById('product');
      if (!productSection) return;
      const productSectionTop = productSection.offsetTop;
      const productSectionHeight = productSection.clientHeight;
      const scrollPosition = window.pageYOffset + 1000;
  
      if (scrollPosition > productSectionTop && scrollPosition < productSectionTop + productSectionHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={`back-to-top-button ${isVisible ? 'visible' : ''}`} onClick={backToTop}>
      <FontAwesomeIcon className='icon-scroll-up' icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTop;
