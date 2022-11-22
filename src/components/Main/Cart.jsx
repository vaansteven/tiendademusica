import React, {useContext} from 'react'
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
cart.map(elem => 
  <>
    <div> {elem.title}</div>
    <div> {elem.cantidad}</div>

  </>
  
)  )
}

export default Cart