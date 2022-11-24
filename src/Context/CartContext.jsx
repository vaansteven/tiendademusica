import {useState, createContext } from 'react';

export const CartContext= createContext ();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
     
     //Agregar al carrito

    const addToCart = (item, cantidad) => {
        console.log(cantidad)
        if (isInCart(item.id)) {
           
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

     //funcion para eliminar un solo producto,
    const removeOneProduct = (id) => setCart(cart.filter(item=> item.id !== id));

    //funcion para vaciar el carrito
    const deleteAll = () => {
        setCart([]);
    };


//funcion para sumar unidades totales del carrito

    const cantElements = () => {
        let counter = 0;

        cart.map(e => counter += e.cantidad)

        return counter;
    }

    //funcion para sumar total $ del carrito

    const totalAmount= ()=> {
        let count= 0
        const carritoCopia = [...cart]
        carritoCopia.forEach((elem) =>{
            count=count + elem.cantidad * elem.price;
        });
        return count;
    };

    

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteAll, cantElements,removeOneProduct,totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;