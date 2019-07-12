var Class = require('../Models/ClassModel')

module.exports = {
  create,
  
};

async function create(req, res) {
  console.log("attempting to create a new class...")
  try {
    await Class.create(req.body)
    
  } catch (err) {
    res.json({err})
  }
  console.log("class creation sucessful(?)")
}

