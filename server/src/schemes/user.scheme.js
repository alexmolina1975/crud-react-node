const { default: mongoose } = require("mongoose");

const userScheme = new mongoose.Schema({
        username : {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        }
    }
        , 
        {
            timestamps : true
        }
);

const UserModel = mongoose.model('UserModel', userScheme);

module.exports = UserModel;