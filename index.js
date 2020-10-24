const express = require('express');
require('dotenv').config();

//Crear servidor de express
const app = express();

//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
//CRUD: Starships
app.use('/api/starship', require('./routes/starships'));


//Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log(`Corriendo en puerto ${process.env.PORT}`)
})