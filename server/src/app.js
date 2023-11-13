const express = require('express');
const app = express();
const cors = require('cors');
const databaseConnect = require('../database/database');

const cookieParser = require('cookie-parser');
// Uso de rutas
const userRoutes = require ("./routes/user.routes");


const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,PUT,POST,DELETE',
    credentials: true, // Habilita las credenciales (cookies, tokens auth, etc)
    optionsSuccessStatus: 204
};

// Middlewares para cliente
app.use(cors(corsOptions));

// app.use(corsOptions());
app.use(express.json());
app.use(cookieParser())


// Variables de entorno
require('dotenv').config();


app.use(userRoutes)

app.listen(process.env.PORT, () => console.log(`Server escuchando que es gerundio on port ${process.env.PORT}`));

// Llama a database.js para conectarse con la base de datos
databaseConnect();






