const express = require('express')
const router = express.Router()
const classCtrl = require('../../controllers/classCtrl')



router.post('/', classCtrl.create)


module.exports = router