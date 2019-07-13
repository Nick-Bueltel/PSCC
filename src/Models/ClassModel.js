var mongoose = require('mongoose')
var Schema = mongoose.Schema

var classSchema = new Schema({
   playerClassName: String,
   ablRecharge1: String,
   ablRecharge2: String,
   startingWealth: String,
   statBonus1 : String,
   statBonus1Amount: Number,
   statBonus2 : String,
   statBonus2Amount: Number,
   proficiencies : String,
   ability1 : String,
   ability2 : String,
   ability3 : String,
   ability4 : String,
   ability5 : String,
   ability6 : String,
   ability7 : String,
   ability8 : String,
   ability9 : String,
   ability10 : String,
   ability11 : String,
   ability12 : String,
   ability13 : String,
   ability14 : String,
   ability15 : String,

   
   
})



module.exports = mongoose.model('Class', classSchema)