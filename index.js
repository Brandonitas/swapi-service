const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//Crear servidor de express
const app = express();

//Conexion base de datos
dbConnection();

//CORS
app.use(cors());

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