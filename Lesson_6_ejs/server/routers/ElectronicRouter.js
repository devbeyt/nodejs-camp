var express = require('express')
var router = express.Router();
var controller = require('./../controller/ElectronicController')


router.get('/',controller.electronic)
router.get('/notebooks',controller.notebooks)


module.exports = router;