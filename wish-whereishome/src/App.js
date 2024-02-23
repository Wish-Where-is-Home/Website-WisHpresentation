import './App.css';
import React, { useState } from 'react';
import Home from './Sections/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NavbarOpenButton from './Components/NavbarOpenButton/NavbarOpenButton';
import Product from './Sections/Product/Product';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <NavbarOpenButton onClick={toggleNavbar} />
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar}/>
      <Home/>
      <Product/>
    </div>
  );
}

export default App;
