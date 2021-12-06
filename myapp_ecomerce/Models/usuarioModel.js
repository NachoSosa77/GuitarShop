const mongoose = require('../bin/mongoDb');

const usuarioSchema = new mongoose.Schema({

    nombre: String,
    email: String,
    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("usuario", usuarioSchema)

