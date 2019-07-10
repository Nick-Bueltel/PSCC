var mongoose = require('mongoose')
var Schema = mongoose.Schema

var characterSchema = new Schema({
    name : String,
    race : String,
    class : String,
    class2 : String,
    gender : String, 
    Avatar : String, 
    str : Number,
    dex : Number,
    con : Number,
    int : Number, 
    wis : Number,
    cha : Number,
    abilities : [],



})

module.exports = mongoose.model('Character', characterSchema)