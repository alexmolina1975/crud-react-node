const express = require('express');
const app = express();
const cors = require('cors');
const databaseConnect = require('../database/database');

// Uso de rutas
const userRoutes = require ("./routes/user.routes");


// Middlewares para cliente
app.use(cors());
app.use(express.json());


// Variables de entorno
require('dotenv').config();


app.use(userRoutes)

app.listen(process.env.PORT, () => console.log(`Server escuchando que es gerundio on port ${process.env.PORT}`));

// Llama a database.js para conectarse con la base de datos
databaseConnect();






