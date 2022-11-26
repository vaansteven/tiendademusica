import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaTrash } from "node_modules/node_modules/react-icons/fa";
import { TbTrashX } from "node_modules/node_modules/react-icons/tb";
import { FaHome } from "node_modules/node_modules/react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalAmount, removeOneProduct, deleteAll } =
    useContext(CartContext);
  if (cart.length === 0)
    return (
      <h3 className="emptycart">
        Carro vacío, si desea comprar haga click <Link to="/">{FaHome()}</Link>
      </h3>
    );
  return (
    <>
      {cart.map((elem) => (
        <div className="cartdetail">
          <img src={elem.img} alt={elem.title} width="90px" />
          <h3> {elem.title}</h3>
          <h3> {elem.cantidad}</h3>
          <h3>${elem.price} </h3>
          {
            <FaTrash
              size={19}
              className="trashbin"
              onClick={() => removeOneProduct(elem.id)}
            />
          }
        </div>
      ))}
      <h2 className="carth2"> Total: $ {totalAmount()}</h2>
      {
        <TbTrashX
          alt="vaciar carrito"
          size={28}
          className="trashbinall"
          onClick={() => deleteAll()}
        />
      }
    </>
  );
};

export default Cart;
