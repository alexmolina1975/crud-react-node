const mongoose = require('mongoose');

const databaseConnect = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Conectado a base de datos ...");
    }
    catch(err){
        console.log("!!! Conection error !!!", err);
    }

}

module.exports = databaseConnect;