import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Sections/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NavbarOpenButton from './Components/NavbarOpenButton/NavbarOpenButton';
import Product from './Sections/Product/Product';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import { CircleLoader } from 'react-spinners';
import LoadingBar from 'react-top-loading-bar';
import Team from './Sections/Team/Team';
import Footer from './Sections/Footer/Footer';
import Presentations from './Sections/Presentations/Presentations';
import Architecture from './Sections/Architecture/Architecture';
import Timeline from './Sections/Timeline/Timeline';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 100 : prevProgress + 50));
    }, 1000);

    setTimeout(() => {
      setIsLoading(false);
      clearInterval(timer);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-spinner fadeOut">
          <LoadingBar progress={progress} color="#61dafb" height={5} />
          <CircleLoader className='loader' color="#61dafb" loading={isLoading} size={150} />
        </div>
      ) : (
        <div className="app-content">
          <ScrollToTop />
          <NavbarOpenButton onClick={toggleNavbar} />
           <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar}/>
          <Home />
          <Product />
          <Presentations/>
          <Architecture/>
          <Timeline/>
          <Team />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

