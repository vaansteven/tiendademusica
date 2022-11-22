import {useState, createContext } from 'react';

export const CartContext= createContext ();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    //variables
     //crear copia del cart
    // const copia = [...cart]
    //const copia = cart.map((prod)=> prod )
    //console.log(props.children);
     //funciones
    const addToCart = (item, cantidad) => {
        //SPREAD --> ...item --> id: 1, title: 'Camisa', price: 200
        //console.log({ ...item, cantidad });
        console.log(cantidad)
        if (isInCart(item.id)) {
            //sumo la cantidad
            //alert('Ya está en el carrito sumale la cantidad flaco 🚨');
            const it = cart.map(i => i.id === +item.id ? {...i, cantidad:  cantidad + i.cantidad} : i);
            console.log(it)
            setCart([...it]);

        } else {
            setCart([...cart, { ...item, cantidad }]);
        }

    };

    //funcion para ver si está en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    //funcion para sumar la cantidad de un mismo producto

    //funcion para vaciar el carrito
    const deleteAll = () => {
        setCart([]);
    };

    const cantElements = () => {
        let counter = 0;

        cart.map(e => counter += e.cantidad)

        return counter;
    }
        //funcion para eliminar un solo producto,

    const eliminarUno = () => {
    
    };


    //funcion para sumar total $ del carrito
    //variables

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteAll, cantElements }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

