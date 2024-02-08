import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalItems, getTotalPrice } from "../../redux/cartSlice";
import './CartStyle.css';

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalItems = useSelector(getTotalItems);

    return (
        <div>
            <hr className='hrStyle' />
            <div className="cartContainer">
                <h2>YOUR CART</h2>
                <h3>Total items: {totalItems} </h3>
                <h3>Total price: {totalPrice}€</h3>
                <button className="orderButton">ORDER</button>
                {cartItems.map(cartItem => <CartItem cartItem={cartItem} />)}
            </div>
        </div>
    )
}

export default Cart;
