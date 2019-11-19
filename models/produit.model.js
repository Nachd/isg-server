const mongoose = require('mongoose');

//definition du schema

const ProductSchema = mongoose.Schema({

    nom : String ,
    ref : String,
    categorie : String,
    prix : Number,
    qte : Number,
    description : String,
    image : String
})

//exportation  du schema
module.exports = mongoose.model('Product' , ProductSchema)