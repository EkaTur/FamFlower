import { useState } from 'react';
import React from 'react';
import {
    Link
} from "react-router-dom";
import Buttons from './Buttons';
import { data } from './data';

const Flowers = () => {
    const [myFlowers, setMyFlowers] = useState(data);

    return (
        <div>
            <hr className='hrStyle' />
            <div className="buttonsContainer">
                <Buttons data={data} setMyFlowers={setMyFlowers} />
            </div>
            <div className='productsContainer'>
                {myFlowers.map(({ name, title, price, image }, index) => (
                    <div className='flowersContainer' key={index}>
                        <div>
                        </div>
                        <Link to={`/about/${title}`}>
                            <img className='flowerPic' src={image} alt='itemPhoto' width='300px' height='450px' />
                        </Link>
                        <h3>{name}</h3>
                        <p className='pricePar'>{price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Flowers;