import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
//import { getProduct } from '../../mock/products';
import ItemDetail from './ItemDetail';
import { collectionProd } from '../../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  console.log('productId')
    useEffect(() => {

    const ref = doc(collectionProd,productId);
    getDoc(ref)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
                console.log(error); 
            })
            .finally(() => {
                setLoading(false);
            });
    }, [productId]);
    
    if (loading) {
        return (
            <div className="detail-container">
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <div className="detail-container">
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer