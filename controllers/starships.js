const {response} = require('express');

const obtenerDataStarship = (req, res = response) =>{
    res.status(200).json({
        ok:true
    })
}

const actualizarDataStarship = (req, res=response) =>{

    const {length, maxSpeed, cargoCapacity} = req.body;

    console.log(req.body);

    res.status(200).json({
        ok: true,
        length,
        maxSpeed,
        cargoCapacity
    })
}

module.exports = {
    obtenerDataStarship,
    actualizarDataStarship
}