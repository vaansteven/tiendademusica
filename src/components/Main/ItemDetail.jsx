import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Contador from "./Contador";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addToCart(item, cantidad);
  };

  return (
    <div className="detail">
      <img src={item.img} alt={item.title} />
      <article>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
        <Contador stock={item.stock} onAdd={onAdd} />
      </article>
    </div>
  );
};

export default ItemDetail;
