const { Router } = require ('express');  // solo me interesa la parte del Router de Express

const controller = require('../controllers/user.controller');

const userRouters = Router(); //objeto

userRouters.post('/api/graba', controller.createUser);

userRouters.get('/api/recuperaTodos', controller.getAllUsers);

userRouters.get('/api/recuperaUno', controller.getUser);

userRouters.post('/api/email', controller.getUserEmail);

userRouters.get('/api/:email', controller.getUserId);

userRouters.put('/api/actualizaUsuario/:id', controller.updateUsuario);

userRouters.put('/api/actualizaUsuarioCorto/:id', controller.updateUsuarioCorto);

userRouters.delete('/api/borraUsuario/:id', controller.deleteUsuario);

userRouters.post('/login', controller.login);

userRouters.get('/verifyToken', controller.verifyToken);

module.exports = userRouters;