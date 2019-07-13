var Character = require('../Models/Character')

module.exports = {
  create,
  
};

async function create(req, res) {
  console.log("attempting to create a new Character...")
  try {
    await Character.create(req.body)
    
  } catch (err) {
    res.json({err})
  }
  console.log("character creation sucessful(?)")
}

