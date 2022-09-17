const express = require('express');
const router = express.Router();
const {verMedicaciones, crearMedicaciones} = require('../controller/controllerApi')

//tanto get (vistaPeliculas) como post (crear peliculas), se deben relaciona con "controllerApi.js"
router.get('/verMedicaciones', verMedicaciones);
router.post('/crearMedicaciones', crearMedicaciones);

module.exports = router;