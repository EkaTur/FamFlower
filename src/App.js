import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Flowers from './Products/Flowers';
import Home from './Components/Home/Home';
import Delivery from './Components/Delivery/Delivery';
import ProductCard from './Products/ProductCard';
import Cart from './Components/Cart/Cart';
import { useSelector } from 'react-redux';
import { getTotalItems } from './redux/cartSlice';
import Logo from "./Components/Logo/Logo";
import gsap from "gsap";
import { useLayoutEffect } from "react";

function App() {

  useLayoutEffect(() => {
    gsap.fromTo('.link', { opacity: 0 }, { opacity: 1, duration: 3, stagger: 0.5})
  }, [])

  const totalItems = useSelector(getTotalItems);

  return (
    <div>
        <Logo />
      <Router>
        <nav className="nav">
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
