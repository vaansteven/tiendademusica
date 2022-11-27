import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "./Item";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProd } from "../../services/firebaseConfig";
import { SpinnerCircularSplit } from "spinners-react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const ref = categoryName
      ? query(collectionProd, where("category", "==", categoryName))
      : collectionProd;

    getDocs(ref)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => setLoading(true);
  }, [categoryName]);

  if (loading) {
    return (
      <div className="spinner">
      <SpinnerCircularSplit
        size={100}
        thickness={180}
        speed={120}
        color="rgba(172, 57, 57, 1)"
        secondaryColor="rgba(0, 0, 0, 0.99)"
      />
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
