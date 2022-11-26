import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { getProducts } from "../../mock/products";
import Item from "./Item";
import { getDocs,  } from 'firebase/firestore';//query, where
import { collectionProd } from "../../services/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
   const { categoryName } = useParams();

   useEffect(() => {
   
    //const qy = query(collectionProd,where('category','==',categoryName))

    getDocs(collectionProd)//qy
        .then((res)=> {
        const products= res.docs.map((prod)=>{

          return{
            id: prod.id,
            ...prod.data()
          };
        });
        setItems(products);
        }) 
        .catch ((error) => {
        console.log(error)
        })
        .finally (() => { setLoading(false); });


    return () => setLoading(true);
}, [categoryName]);

if (loading) {
    return (
        <div className="container">
        <h1> cargando...</h1>
        </div>
    );
}

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
