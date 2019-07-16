const express = require('express')
const router = express.Router()
const characterCtrl = require('../../controllers/characterCtrl')



router.post('/', characterCtrl.create)
router.post('/show', characterCtrl.search )
router.post('/deleteChar', characterCtrl.deleteChar)


module.exports = router