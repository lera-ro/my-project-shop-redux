const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {  
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }
    
    return(<div>
        <button onClick={addQuantity} className="quantity">+</button>
        <span> {quantity} </span>
        <button onClick={removeQuantity} className="quantity">-</button>
    </div>)
}

export default ChangeQuantity;