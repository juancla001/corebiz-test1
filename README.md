# Comenzar.
Clone el reposotorio utilizando su terminal
    git clone https://github.com/MatataFerra/corebiz-frontend-challenge.git

Iniciar posicionandose sobre la carpeta corebiz-test1
    cd corebiz-test1

desde la terminal instalar los paquetes de npm
    npm install

Correr el compando  npm start

La aplicacion se abrira en su navegador web, en un entorno local, desde el puerto 3000
    http://localhost:3000

## Visualizacion 

Usted visualizara una pagina e-commerce, donde podra ver productos traidos de la API, con la opcion de agregar productos al carrito.

Tambien podra suscribirse al newsletter, que en caso de ingresar valores incorectos este se lo informara.

### Herramientas utilizadas
La aplicacion esta desarrollada en React, la conexion a la API se hizo a traves de fetch que me permite acceder a recursos del servidor de manera asincrona.
Para el formulario se utilizo el hook useForm, que contiene la funcion useForm que me permite des-estruucturar funciones.
useContext y useReducer para el manejo del estado de la app.
Se utilizo helper para resolver problemas de incompatibilidad.
La logica es basada en ES6+