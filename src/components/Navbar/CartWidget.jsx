import React, { useContext } from 'react'; 
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from "../../Context/CartContext";


const CartWidget = () => {
    const { cantElements } = useContext(CartContext);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {<AiOutlineShoppingCart size={27} color="red" />}
            
            <span>{cantElements()}</span>
        </div>
    );
};

export default CartWidget;
