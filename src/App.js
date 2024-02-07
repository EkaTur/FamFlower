import React, { useEffect, useRef } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
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
import Cart from './Cart';
import { useSelector } from 'react-redux';
import { getTotalItems } from './redux/cartSlice';

function App() {

  const totalItems = useSelector(getTotalItems);

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
            <NavLink className='link' to='/' activeClassName='active'>HOME</NavLink>
            <NavLink className='link' to='/flowers' activeClassName='active'>OUR FLOWERS</NavLink>
            <NavLink className='link' to='/contacts' activeClassName='active'>CONTACTS</NavLink>
            <NavLink className='link' to='/delivery' activeClassName='active'>DELIVERY</NavLink>
            <NavLink className='link' to='/about' activeClassName='active'>ABOUT US</NavLink>
            <NavLink className='link' to='/cart' activeClassName='active'>CART ({totalItems})</NavLink>
        </nav>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/flowers' element={<Flowers />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/about/:title" element={<ProductCard />} />
          <Route path="/about/:flowers.title" element={<ProductCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
