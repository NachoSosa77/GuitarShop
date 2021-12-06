var express = require('express');
var router = express.Router();
const usuarioCrtl = require ('../Controllers/usuariosCtrl')

router.post("/", usuarioCrtl.registro);
router.post("/login", usuarioCrtl.login);

module.exports = router;
