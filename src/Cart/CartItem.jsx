import { useDispatch } from "react-redux";
import dataCosmetics from "../data/dataCosmetics";
import { removeItemFromCart } from "../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const cosmetics = dataCosmetics.find(item => item.id === cartItem.cosmeticID);
    const dispatch = useDispatch();

    return(<div className="item-cart">
        <p>{cosmetics.name}</p>
        <img src={`${cosmetics.photo}.jpg`} className="photo-cart"/>
        <p>x{cartItem.quantity}</p>
        <p>Price: ${cosmetics.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemID: cartItem.id}))}>
          <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/>  
        </span>        
    </div>)
}

export default CartItem;