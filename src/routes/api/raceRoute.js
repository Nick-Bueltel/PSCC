const express = require('express')
const router = express.Router()
const raceCtrl = require('../../controllers/raceCtrl')



router.post('/', raceCtrl.create)


module.exports = router
