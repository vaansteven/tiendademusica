import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {  FaTrash } from 'react-icons/fa';
import{TbTrashX} from 'react-icons/tb';



const Cart = () => {
  const { cart, totalAmount, removeOneProduct,deleteAll } = useContext(CartContext);


  return (
    <>
      {cart.map((elem) => (
        <div className="cartdetail" >
          <img src={elem.img} alt={elem.title} width="90px" />
          <h3> {elem.title}</h3>
          <h3> {elem.cantidad}</h3>
          <h3>${elem.price} </h3>
          {<FaTrash size={19} className="trashbin" onClick={()=>removeOneProduct(elem.id)}/>}
        </div>
      ))}
      <h2 className="carth2"> Total: $ {totalAmount()}</h2>
      {<TbTrashX alt="vaciar carrito" size={26}  className="trashbinall" onClick={()=>deleteAll()}/>}
      
    </>
  );
};

export default Cart;
