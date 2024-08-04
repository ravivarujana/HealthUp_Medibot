const mongoose = require('mongoose');

const Meal = mongoose.model('Meal',new mongoose.Schema({
    name : String,
    veg : Boolean,
    
}))
exports.Meal = Meal;