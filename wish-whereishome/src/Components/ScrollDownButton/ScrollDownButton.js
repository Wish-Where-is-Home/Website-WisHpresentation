import React from "react";
import './ScrollDownButton.css';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ScrollDownButton = () => {

    const scrollToProductSection = () => {
        const productSection = document.getElementById('product');
        productSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="ScrollDown-button" onClick={scrollToProductSection}>
            <p>Scroll down</p>
            <button className="ScrollDownButton" >
                <FontAwesomeIcon className='icon-scroll-down' icon={faArrowDown} />
            </button>
        </div>
    );
}
export default ScrollDownButton;

