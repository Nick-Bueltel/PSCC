var mongoose = require('mongoose')
var Schema = mongoose.Schema

var abilitySchema = new Schema({
    abilityName: String,
    one : String,
    two : String,
    three : String,
    four : String,
    five : String,
        
        })

var subClassSchema = new Schema({
    subDescription : String,
    subAbility1 : [{abilitySchema}],
    subAbility2 : [{abilitySchema}],
    subAbility3 : [{abilitySchema}],
    subAbility4 : [{abilitySchema}],
    subAbility5 : [{abilitySchema}],
    subAbility6 : [{abilitySchema}],
    subAbility7 : [{abilitySchema}],
    subAbility8 : [{abilitySchema}],
    subAbility9 : [{abilitySchema}],
    subAbility10 : [{abilitySchema}],
})


var abilitiesSchema = new Schema({
    ability1 : [{abilitySchema}],
    ability2 : [{abilitySchema}],
    ability3 : [{abilitySchema}],
    ability4 : [{abilitySchema}],
    ability5 : [{abilitySchema}],
    ability6 : [{abilitySchema}],
    ability7 : [{abilitySchema}],
    ability8 : [{abilitySchema}],
    ability9 : [{abilitySchema}],
    ability10 : [{abilitySchema}],
    ability11 : [{abilitySchema}],
    ability12 : [{abilitySchema}],
    ability13 : [{abilitySchema}],
    ability14 : [{abilitySchema}],
    ability15 : [{abilitySchema}],


})



var classSchema = new Schema({
   playerClassName: String,
   ablRecharge1: String,
   ablRecharge2: String,
   startingWealth: String,
   statBonus1 : String,
   statBonus1Amount: Number,
   statBonus2 : String,
   statBonus2Amount: Number,
   proficiency1 : Boolean,
   subClass1 : [{subClassSchema}],
   subClass2 : [{subClassSchema}],
   abilities : [{abilitiesSchema}],
   purchaseRQ : Boolean, 





})



module.exports = mongoose.model('Class', classSchema)