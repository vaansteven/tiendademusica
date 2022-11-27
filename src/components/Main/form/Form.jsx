import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import { db } from "../../../services/firebaseConfig";

const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email1: "",
    email2: "",
    tel: "",
  });
  const { cart, totalAmount, deleteAll, } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  

  const enviarDatos = (e) => {
    e.preventDefault();

    const detalleVenta = {
      cliente: {
        name: data.nombre,
        lastName: data.apellido,
        telefono: data.tel,
        email: data.email1, 
        
    
       

      },
      items: cart,
      total: totalAmount(),
      date: serverTimestamp(),
    };
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, detalleVenta)
      .then((res) => {
        setOrderId(res.id);
        deleteAll();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  if (orderId) {
    return (
      <h2 className="emptycart">
        Gracias por comprar en Music Mind. Tu número de orden es: {orderId} 
      </h2>
    );
  }

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form action="" onSubmit={enviarDatos}>
      <h4 className="emptycart">Ingrese sus datos para finalizar su compra</h4>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={handleChange}
          value={data.nombre}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={handleChange}
          value={data.apellido}
        />
        <input
          type="text"
          placeholder="Teléfono"
          name="tel"
          onChange={handleChange}
          value={data.tel}
        />
        <input
          type="text"
          placeholder="Email"
          name="email1"
          onChange={handleChange}
          value={data.email1}
        />
        <input
          type="text"
          placeholder="Ingrese su email nuevamaente"
          name="email2"
          onChange={handleChange}
          value={data.email2}
        />
        <button disabled={data.email1!==data.email2} >Enviar</button>
      </form>
    </div>
  );
};

export default Form;
