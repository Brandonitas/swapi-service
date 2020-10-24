/*
    RUTAS Starships
    host +/api/starship
*/

const {Router} = require('express');
const { obtenerDataStarship, actualizarDataStarship } = require('../controllers/starships');
const router = Router();

router.get('/', obtenerDataStarship)

router.post('/', actualizarDataStarship)

module.exports = router;