import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getProducts } from '../../mock/products';
import Item from './Item'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        getProducts(categoryName)
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
            });
    }, [categoryName]);

    return (
        <div className="container">
        <div className="item-list">
            {items.map((producto) => {
                return <Item producto={producto} key={producto.id} />;
            })}
        </div>
        </div>
    );
};

export default ItemListContainer;
