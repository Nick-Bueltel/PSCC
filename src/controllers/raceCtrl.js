var Race = require('../Models/RaceModel')

module.exports = {
  create,
  
};

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    await Race.create(req.body)
    
  } catch (err) {
    res.json({err})
  }
}



