import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebaseConfig";

const Navbar = () => {
  const [, setCategories] = useState([]); //categories

  useEffect(() => {
    const catCollection = collection(db, "categorias");
    getDocs(catCollection)
      .then((res) => {
        const secciones = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setCategories(secciones);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <nav className="navbar">
      <h1 className="title">
        <Link className="links" to="/">
          Music Mind
        </Link>
      </h1>
      <ul>
        {/* {categories.map((cat) => (
            <NavLink
              key={cat.id}
              className="links"
              to={`/categorias/${cat.path}`}
            >
              {cat.title}
            </NavLink>
          ))} */}

        <NavLink className="links" to="/category/consolas">
          Consolas
        </NavLink>

        <li>
          <NavLink className="links" to="/category/auriculares">
            Auriculares
          </NavLink>
        </li>
        <li>
          <NavLink className="links" to="/category/merchandise">
            Merchandise
          </NavLink>
        </li>
      </ul>
      <Link className="links" to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default Navbar;
