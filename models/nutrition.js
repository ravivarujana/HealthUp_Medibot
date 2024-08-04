const mongoose = require('mongoose');

const Nutrient = mongoose.model('Nutrient',new mongoose.Schema({
    name : String,
    veg : [String],
    nonveg : [String]
}))

exports.Nutrient = Nutrient;