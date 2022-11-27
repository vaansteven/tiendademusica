import { collection, serverTimestamp,addDoc, } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../../Context/CartContext';
import { db } from '../../../services/firebaseConfig';



const Form = () => {

    const [data, setData] = useState({ nombre: '', apellido: '', email:'',tel: '',});
    const{cart,totalAmount,deleteAll}=useContext(CartContext)
    const[orderId,setOrderId]=useState('')

    const enviarDatos = (e) => {
        e.preventDefault();
        
            const detalleVenta = {
            cliente: {
                name:"",
                lastName:"",
                telefono:"",
                email:"",
            },
            items:cart,
            total:totalAmount(),
            date:serverTimestamp(),
            
        };
        const orderCollection=collection(db,"orders")

        addDoc(orderCollection,detalleVenta)
        .then((res) => {
            setOrderId(res.id);
            deleteAll();
            
        })
        .catch((error) => {
            console.log(error);
            
        })



                
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value }); 
    };
    
    if (orderId){
        return(
        <h2> Gracias por comprar en Music Mind. Tu número de oreden es:{orderId}</h2>
    )}


    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form action="" onSubmit={enviarDatos}>
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
                    placeholder="teléfono"
                    name="tel"
                    onChange={handleChange}
                    value={data.tel}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                />
                <button >Enviar</button> 
                 {/* disabled={email1!==email2}  */}
                 
            </form>
        </div>
    );
};
 
export default Form;

 

