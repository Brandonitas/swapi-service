/*
    RUTAS Starships
    host +/api/starship
*/

const {Router} = require('express');
const { getDataStarship, updateDataStarship, createDataStarship, deleteDataStarship } = require('../controllers/starships');
const router = Router();
const { check } = require('express-validator');
const {fieldValidator} = require('../middlewares/fieldValidator');

router.get('/:idstarship', getDataStarship);

router.post(
    '/', 
    [//middlewares
        check('length', 'Length is requiered').not().isEmpty(),
        check('maxSpeed', 'MaxSpeed is requiered').not().isEmpty(),
        check('cargoCapacity', 'CargoCapacity is requiered').not().isEmpty(),
        fieldValidator
    ], 
    createDataStarship);

router.put(
    '/:idstarship', 
    [//middlewares
        check('length', 'Length is requiered').not().isEmpty(),
        check('maxSpeed', 'MaxSpeed is requiered').not().isEmpty(),
        check('cargoCapacity', 'CargoCapacity is requiered').not().isEmpty(),
        fieldValidator
    ], 
    updateDataStarship);    

router.delete('/:idstarship', deleteDataStarship);    

module.exports = router;