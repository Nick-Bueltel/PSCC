var mongoose = require('mongoose')
var Schema = mongoose.Schema

var raceSchema = new Schema({
    raceName : String,
    natArmor : Number, 
    raceHealth : Number,
    raceSize : String,
    raceVision: String, 
    raceSpeed : Number,
    raceCES : Number, 
    racePC: String, 
    raceLanguages : String,
    raceReligion : String, 
    raceBonusName : String, 
    raceBonusAmount : Number,
    raceBonusStat : String,
    racePurchase : Boolean,
})

module.exports = mongoose.model('Race', raceSchema)