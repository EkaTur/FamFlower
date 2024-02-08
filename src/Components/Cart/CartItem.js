import { useDispatch } from 'react-redux';
import { data } from '../../Data/FlowersData';
import { removeItemFromCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import './CartStyle.css';

const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch();

    const flowers = data.find(item => item.id === cartItem.flowerId);

    console.log(flowers);

    return (
        <div className='cartItemContainer'>
                <h4>{flowers.name}</h4>
            <Link className='cartLinkForProduct' to={`/about/${flowers.title}`}>
                <img src={flowers.image} alt='flowerPhoto' width='200px' />
            </Link>
                <p>{flowers.price}€</p>
            <button onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} className='deleteButton'>DELETE</button>
        </div>

    )
}

export default CartItem;