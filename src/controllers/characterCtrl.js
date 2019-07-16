var Character = require('../Models/Character')

module.exports = {
  create,
  search,
  deleteChar,
  
};

async function create(req, res) {
  console.log("attempting to create a new Character...")
  try {
    console.log(req.body)
    await Character.create(req.body)
    
  } catch (err) {
    res.json({err})
  }
  console.log("character creation sucessful(?)")
}

async function search(req, res){
  console.log("searching the DB")
  try{
    let usersChar = await Character.findOne({user : req.body.email})
    await res.send(usersChar)
  } catch (error) {
    console.error(error)
  }
}

async function deleteChar(req, res){
  console.log("search & destroy")
  try{
    let usersChar = await Character.findByIdAndDelete({_id : req.body._id})
    await res.send(usersChar)
  } catch(error){
    console.error(error)
  }
}
