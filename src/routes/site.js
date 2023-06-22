const express = require('express')
const router = express.Router() 

// function Handler
const sitesController = require('../app/controllers/SiteController')

router.use('/', sitesController.search)
router.use('/', sitesController.index)


module.exports = router