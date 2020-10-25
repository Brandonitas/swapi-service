const {Schema, model} = require('mongoose');

const StarshipSchema = Schema({
    idStarship: {
        type: Number,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    maxSpeed:{
        type: String,
        required: true
    },
    cargoCapacity:{
        type: String,
        required: true
    }
});

StarshipSchema.method('toJSON', function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

//En MongoDB se quedará guardada como starships, en plural 
module.exports = model('Starship', StarshipSchema);

