import React from 'react';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1 className="title">
        <Link className="links" to="/">
        Music Mind
    </Link>
       </h1>
            <ul>
                <li> 
                <NavLink className="links" to="/category/consolas">
                    Consolas
                </NavLink>
                </li>
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
                <li>  <CartWidget /></li>
            </ul>
          
        </nav>
    );
};

export default Navbar;