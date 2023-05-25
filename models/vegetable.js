const mongoose = require('mongoose')
const vegetableSchema = new mongoose.Schema({
    name: {type: String, require: true},
    season: {type: String, require: true},
    isInSeason: Boolean
})

const Vegetable = mongoose.model('Vegetable', vegetableSchema)
module.exports = Vegetable