const express = require('express')
const router = express.Router()
const characterCtrl = require('../../controllers/characterCtrl')



router.post('/', characterCtrl.create)


module.exports = router