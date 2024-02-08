import React from 'react';
import {
    Link
} from "react-router-dom";
import Buttons from '../Components/Filter/Buttons';
import { data } from '../Data/FlowersData';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import { getSelectedCategory } from '../redux/categorySlice';
import './ProductsStyle.css';

const Flowers = () => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return (
        <div>
            <hr className='hrStyle' />
            <div>
                <Buttons/>
            </div>
            <div className='productsContainer'>
                {data.filter(flower => {
                    if (selectedCategory === 'SHOW ALL') return true;
                    return flower.category.includes(selectedCategory)
                })
                    .map(({ name, title, price, image, id }) => (
                    <div className='flowersContainer' key={id}>
                        <div>
                        </div>
                        <Link to={`/about/${title}`}>
                            <img className='flowerPic' src={image} alt='itemPhoto' width='300px' height='450px' />
                        </Link>
                        <h3>{name}</h3>
                        <p className='pricePar'>{price} €</p>
                        <button onClick={() => {dispatch(addItemToCart({myFlowers: { id, name, price, image}, quantity: 1}))}} className='addButton'>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Flowers;