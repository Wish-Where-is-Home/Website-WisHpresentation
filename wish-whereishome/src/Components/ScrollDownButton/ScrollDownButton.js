import React from "react";
import './ScrollDownButton.css';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ScrollDownButton = () => {





    return (
        <div className="ScrollDown-button">
            <p>Scroll down</p>
            <button className="ScrollDownButton" >
                <FontAwesomeIcon className='icon-scroll-down' icon={faArrowDown} />
            </button>
        </div>
    );
}
export default ScrollDownButton;

