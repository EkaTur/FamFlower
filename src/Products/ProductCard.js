import { useNavigate, useParams } from "react-router-dom";
import { data } from "../Data/FlowersData";
import { gsap } from 'gsap/all';
import { useEffect, useRef } from "react";
import './ProductsStyle.css';

const ProductCard = () => {

    const pic = useRef(null);

    useEffect(() => {
        gsap.to(pic.current, {
        opacity: 1, delay: 1, duration: 2 
        });
    }, [pic]);

    const { title } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <hr className='hrStyle' />
            {data.filter((item) => item.title === title).map((element, index) => {
                return (
                    <div key={index}>
                        <div className="productCardContainer">
                            <div>
                                <h3 className="headerProductCard">{element.name}</h3>
                                <img className="productCardPhoto" ref={pic} src={element.image} alt='product' width='400px' height='500px' />
                            </div>
                            <div className="descriptionContainer">
                                <p className="parProductCard">{element.description}</p>
                                <ul>
                                    {element.features.map((item, id) => (
                                        <li key={id}>{item}</li>
                                    ))}
                                </ul>
                                <button className="buttonBack" onClick={() => navigate(-1)}>BACK</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard;