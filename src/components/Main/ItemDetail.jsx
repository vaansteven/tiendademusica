import React from 'react';
import Contador from './Contador';

const ItemDetail = ({ item }) => {
    const onAdd = (qty) => console.log(qty);
    return (
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <article>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3>${item.price}.-</h3>
                <Contador stock={item.stock} onAdd={onAdd} />
            </article>
        </div>
    );
};

export default ItemDetail;
