import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Cosmetic = ({cosmetic}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(<div className="thing">
        <h2>{cosmetic.name}</h2>
        <img src={`${cosmetic.photo}.jpg`} className="photo"/>
        <p><ChangeQuantity quantity={quantity} setQuantity={setQuantity}/></p>
        <button onClick={() => {dispatch(addItemToCart({cosmetic, quantity}))}} className="add">add to cart</button>
        <p>$ {cosmetic.price}</p>         
        </div>
    )
}

export default Cosmetic;