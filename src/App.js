import React, { useEffect, useRef, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import AboutUs from './AboutUs';
import './App.css';
import Contacts from './Contacts';
import Flowers from './Flowers';
import Home from './Home';
import icon from './Assets/icon.png';
import Delivery from './Delivery';
import LoaderPage from './Loader/LoaderPage';
import ProductCard from './ProductCard';
import { gsap } from 'gsap/all';

function App() {
  const [myLoader, setMyLoader] = useState(false);

  const header = useRef(null);
  const iconCont = useRef(null);

  useEffect(() => {
    gsap.to(header.current, {
      opacity: 1, delay: 1, duration: 2 
    });
  }, [header]);

  useEffect(() => {
    gsap.to(iconCont.current, {
      opacity: 1, delay: 1, duration: 2 
    });
  }, [iconCont]);

  const handleClick = () => {
    setMyLoader(true);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMyLoader(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [myLoader]);

  return (
    <div>
      {myLoader && <LoaderPage />}
      <div className='headerContainerApp' ref={header}>
        <h3>Fam Flowers</h3>
      </div>
      <div className='iconContainer' ref={iconCont}>
        <img src={icon} alt='icon' width='150px' />
      </div>
      <Router>
        <nav>
            <Link className='link' onClick={handleClick} to='/'>HOME</Link>
            <Link className='link' onClick={handleClick} to='/flowers'>OUR FLOWERS</Link>
            <Link className='link' onClick={handleClick} to='/contacts'>CONTACTS</Link>
            <Link className='link' onClick={handleClick} to='/delivery'>DELIVERY</Link>
            <Link className='link' onClick={handleClick} to='/about'>ABOUT US</Link>
        </nav>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/flowers' element={<Flowers />} />
          <Route path="/about/:title" element={<ProductCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
