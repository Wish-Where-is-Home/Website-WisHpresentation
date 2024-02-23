import React from 'react';
import './NavbarOpenButton.css'; 

const NavbarOpenButton = ({ onClick }) => {
  return (
    <button className="navbar-open-button" onClick={onClick}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6H21V7H3V6ZM3 12H21V13H3V12ZM3 18H21V19H3V18Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default NavbarOpenButton;