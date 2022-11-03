import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getProduct } from '../../mock/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { productId } = useParams();

  console.log('productId')
    useEffect(() => {
        getProduct(productId)
            .then((res) => {
                console.log('RESPUESTA', res)
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [productId]);

    return (
        <div className="detail-container">
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer