const {response} = require('express');
const Starship = require('../models/Starship');

const getDataStarship = async(req, res = response) =>{

    const starshipId = req.params.idstarship;

    try {

        const starship = await Starship.findOne({idStarship: starshipId})
        if(!starship){
            return res.status(404).json({
                ok: false,
                msg: 'Starship doesnt exist'
            })
        }
        
        res.json({
            ok: true,
            starship
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to admin'
        })
    }

}

const createDataStarship = async(req, res=response) =>{

    const starship = new Starship(req.body);

    try {

        const starshipSaved = await starship.save();
        res.status(200).json({
            ok: true,
            starshipSaved
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to admin'
        })
        
    }

}


const updateDataStarship = async(req, res=response) =>{

    const starshipId = req.params.idstarship;

    try {

        const starship = await Starship.findOne({idStarship: starshipId})
        if(!starship){
            return res.status(404).json({
                ok: false,
                msg: 'Starship doesnt exist'
            })
        }

        console.log(starship);

        const newStarship = {
            ...req.body
        }

        const starshipUpdated = await Starship.findOneAndUpdate({idStarship: starshipId},newStarship, {new: true});

        res.json({
            ok: true,
            starshipUpdated
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to admin'
        })
    }
}


const deleteDataStarship = async(req, res = response) =>{

    const starshipId = req.params.idstarship;

    try {

        const starship = await Starship.findOne({idStarship: starshipId})
        if(!starship){
            return res.status(404).json({
                ok: false,
                msg: 'Starship doesnt exist'
            })
        }

        await Starship.findOneAndDelete({idStarship: starshipId});

        res.json({
            ok: true,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to admin'
        })
    }

}


module.exports = {
    getDataStarship,
    createDataStarship,
    updateDataStarship,
    deleteDataStarship
}