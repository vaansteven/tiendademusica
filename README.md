# Music Mind

Este proyecto se realizó para el proyecto final del curso de ReactJS de Coderhouse.Se trata de un e-commerce que vende productos de música electrónica, como consolas, auriculares, merchandise. 

Link para ver el proyecto aquí
[Music Mind](https://music-mind.netlify.app)

Home
![](https://res.cloudinary.com/dobpipof2/image/upload/v1669584317/Music%20mind/Captura_de_Pantalla_2022-11-27_a_la_s_18.19.02_duuay0.png)

Categorias

![](https://res.cloudinary.com/dobpipof2/image/upload/v1669584317/Music%20mind/Captura_de_Pantalla_2022-11-27_a_la_s_18.20.39_b2gyc5.png)

Detalle de producto
![](https://res.cloudinary.com/dobpipof2/image/upload/v1669584317/Music%20mind/Captura_de_Pantalla_2022-11-27_a_la_s_18.21.18_giev5e.png)

CART
![](https://res.cloudinary.com/dobpipof2/image/upload/v1669584317/Music%20mind/Captura_de_Pantalla_2022-11-27_a_la_s_18.22.00_e6x3fk.png)




Link para ver el proyecto deployado
[mi-tienda](http://mi-tienda.netlify.com)

## Librerias utilizadas

-   [react-router-dom](https://reactrouter.com/en/main) 
-   [Firebase](https://firebase.google.com/?gclid=Cj0KCQiAsoycBhC6ARIsAPPbeLsyx4yFca2Ail9OLSvw4iddQsex-7NaPJ6pog7FGJNEd6F4bL96ubcaApZpEALw_wcB&gclsrc=aw.ds)
-   [React-spinners](https://www.npmjs.com/package/react-spinners)
-   [React-icons](https://react-icons.github.io/react-icons/)


[react-router-dom](https://reactrouter.com/en/main): 
Se utilizó para crear las rutas de navegación de la página.

 [Firebase](https://firebase.google.com/?gclid=Cj0KCQiAsoycBhC6ARIsAPPbeLsyx4yFca2Ail9OLSvw4iddQsex-7NaPJ6pog7FGJNEd6F4bL96ubcaApZpEALw_wcB&gclsrc=aw.ds) :  fue utilizado en esrte proyecto para crear nuestra base de datos y consumirla en el proyecto. También para alojar datos creados a partir de  las órdenes de compra como son los datos de nuestros clientes.

 Se destaca de Firebase las bases de datos en tiempo real. Estas se alojan en la nube, son No SQL y almacenan los datos como JSON. Permiten alojar y disponer de los datos e información de la aplicación en tiempo real, manteniéndolos actualizados aunque el usuario no realice ninguna acción.
Firebase envía automáticamente eventos a las aplicaciones cuando los datos cambian, almacenando los datos nuevos en el disco. Aunque no hubiera conexión por parte de un usuario, sus datos estarían disponibles para el resto y los cambios realizados se sincronizarían una vez restablecida la conexión.

[React-spinners](https://www.npmjs.com/package/react-spinners)
: Los utilcé para mejorar la experiencia de usuario en los tiempos de espera en que se renderizan los datos a mostrar. 

  [React-icons](https://react-icons.github.io/react-icons/)
  :Fueron utilizados para los íconos del proyecto como son el carrito de compras en el navbar. También fue utilizado en el cart al momento de borrrar items de compra, volver al home cuando el carro estaba vacío.



## Funcionalidad del proyecto


-Ampliar el detalle de cada producto.

-Agregar la cantidad deseada de productos al carrito.

-Visualizar los productos en el carrito, así como el total de unidades y también el precio total.

-Hacer el Checkout para generar la orden de compra ficticia, que se 
-enviará a Firebase con los datos ingresados.

-Buscar por código la Orden de Compra generada y visualizar los productos que contiene.


## Pasos para levantar el proyecto de manera local


1.  Clonar el repositorio

```
git clone https://github.com/vaansteven/tiendademusica.git
```

2. Instalar las dependencias

```
npm install
```


3. Correr el proyecto en el navegador

```
npm start
```


