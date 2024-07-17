const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour']
    },
    isDrink : Boolean,
    ingredients : {
        type:String,
        enum:["chicken wings","sauce","spices"]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const menu = mongoose.model('Menu',menuSchema);

module.exports = menu;