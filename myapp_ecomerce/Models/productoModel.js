const mongoose = require("../bin/mongoDb");

const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: String,
  sku: String,
  img:String,
  });

module.exports = mongoose.model("producto", productoSchema);
