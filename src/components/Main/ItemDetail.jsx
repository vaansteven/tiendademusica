import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Contador from "./Contador";
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

  const { addToCart } = useContext(CartContext);
  const [show, setShow] = useState(true);

  const onAdd = (cantidad) => {
    addToCart(item, cantidad);
    setShow(false)
  };

  return (   
    <div className="detail">
      <img src={item.img} alt={item.title} />
      <article>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
        
        {show?( 
          <Contador stock={item.stock} onAdd={onAdd} />
          ):(<Link className="add" to="/cart">Ir al carrito</Link>)
        }
      
      </article>
    </div>
  );
};

export default ItemDetail;
