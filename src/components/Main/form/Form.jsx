import React, { useState } from 'react';
import { useEffect } from 'react';

const Form = () => {

    const [data, setData] = useState({ nombre: '', apellido: '', email:'' });

    const enviarDatos = (e) => {
        e.preventDefault();
        
            // const detalleVenta = {
        //     cliente: {
        //         nombre: name,
        //         apellido: lastName,
        //         email: email,
       //         numero de orden: orderCode, 
       //         fecha de orden:date,
        //     },
        // };
                
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    

    useEffect(() => {
        console.log("Se creo el componente")
        window.addEventListener('click', handleChange)

        return () => {
            console.log("Se borro el componente")

            window.removeEventListener('click', handleChange)

        };
    });

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
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;

 

