//Este archivo es el controlador, dice lo que vamos a hacer

const UserModel = require("../schemes/user.scheme");

const controller = {};

const bcrypt = require('bcrypt');

/** Crea usuario en MongoDB */
controller.createUser =  async(req, res) => {

    console.log("POST ENVIANDO ...");

    const {username, password, email} = req.body;
    
    const saltRounds = 10; 

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser =  new UserModel ({
        username,
        password: hashedPassword,
        email   // no es email:email porque la variable se llama igual que la del objeto del Schema
    });

    try{
        await newUser.save();
        res.status(201).send({message: 'USUARIO CREADO'});
    }
    catch(err){
        if(err.code === 11000)
        {
            res.status(409).send({message: 'Email existe, código: ' + err.code});
        }
    }

    
};

controller.getAllUsers = async(req, res) => {
    
    try{
        const allUsers = await UserModel.find();

        res.status(200).send(allUsers);
    }
    catch(err){
        res.status(400).send({message: 'Error código: ' + err.code});
    }
    
};

/** Construyendo un usuario */
controller.getUser = async(req, res) => {
    
    const usuarioABuscar = {
        email : "aaa@aaa4.com"
        
    };

    try{
        const usuario = await UserModel.find({"email" : "aaa@aaa4.com"}); // Un ejemplo de busqueda
        // const usuario = await UserModel.find({"username" : "ALEX"}); 
        //const usuario = await UserModel.find(usuarioABuscar); // Otro ejemplo más mejor

        res.status(200).send(usuario);
    }
    catch(err){
        res.status(400).send({message: 'Error código: ' + err.code});
    }
    
};

/* Buscar por body JSON "email" : "aaa@aaa4.com" */
controller.getUserEmail = async(req, res) => {
    
    console.log(req.body);

    try{
        const allUsers = await UserModel.find(req.body); // Un ejemplo de busqueda. Parametro viene por POST, en el body
        
        res.status(200).send(allUsers);
    }
    catch(err){
        res.status(400).send({message: 'Error código: ' + err.code});
    }
    
};


/** localhost:3000/api/aaa65634@aaa4.com */
controller.getUserId = async(req, res) => {
    
    try{
        const allUsers = await UserModel.find({email: req.params.email});  // Parametro viene por url
        
        res.status(200).send(allUsers);
    }
    catch(err){
        res.status(400).send({message: 'Error código: ' + err.code});
    }
    
};


/** Actualizar llamando PUT localhost:3000/api/actualizaUsuario/65490af2da14ee0fbae10c98 */
/** Camino Largo para actualizar */
controller.updateUsuario = async(req, res) => {

    try{
        const user = await UserModel.findById(req.params.id);  // Parametro viene por url

        if(!user){
            res.status(409).send({message: 'Usuario no existe: ' + err.code});
            return;
        }

        await UserModel.updateOne({_id: user.id}, { $set: {username: 'user001'}});

        const usuarioActualizado = await UserModel.findById({_id: req.params.id});  // Parametro viene por url
        
        // res.status(200).send(usuarioActualizado); Devuelve el usuario actualizado

        const allUsers = await UserModel.find();    // Devuelve listado de todos

        res.status(200).send(allUsers);

        
        res.send('User updated');
    }
    catch(err){
        res.status(400).send({message: 'Error código: ' + err.code}); 
    }
}

/** Encuentra por ID y actualiza */
controller.updateUsuarioCorto = async (req, res) => {

    try{
        const user = await UserModel.findByIdAndUpdate(req.params.id, { username: 'user999'});  // Parametro viene por url

        const allUsers = await UserModel.find();    // Devuelve listado de todos

        res.status(200).send(allUsers);        
        
    }

    catch(err){
        res.status(400).send({message: 'Error código: ' + err.code}); 
    }
}

/** Encuentra por ID y borra */
controller.deleteUsuario = async (req, res) => {

    try{
        const user = await UserModel.findByIdAndDelete(req.params.id);  // Parametro viene por url

        const allUsers = await UserModel.find();    // Devuelve listado de todos

        res.status(200).send(allUsers);        
        
    }

    catch(err){
        res.status(400).send({message: 'Error código: ' + err.code}); 
    }
}

module.exports = controller;
