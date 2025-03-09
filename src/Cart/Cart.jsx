import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <h1>your cart</h1>
        <div className="main-cart">         
            <h3>total: ${totalPrice}</h3>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}           
        </div>
        </div>
    )
}

export default Cart;