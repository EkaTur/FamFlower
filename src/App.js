import React, { useEffect, useRef } from 'react';
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
import ProductCard from './ProductCard';
import { gsap } from 'gsap/all';

function App() {

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

  return (
    <div>
      <div className='headerContainerApp' ref={header}>
        <h3>Fam Flowers</h3>
      </div>
      <div className='iconContainer' ref={iconCont}>
        <img src={icon} alt='icon' width='150px' />
      </div>
      <Router>
        <nav>
            <Link className='link' to='/'>HOME</Link>
            <Link className='link' to='/flowers'>OUR FLOWERS</Link>
            <Link className='link' to='/contacts'>CONTACTS</Link>
            <Link className='link' to='/delivery'>DELIVERY</Link>
            <Link className='link' to='/about'>ABOUT US</Link>
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
