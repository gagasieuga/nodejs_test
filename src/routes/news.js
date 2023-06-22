const express = require('express')
const router = express.Router() 

// function Handler
const newsController = require('../app/controllers/NewsController')

router.use('/:lienthien', newsController.show)
router.use('/', newsController.indexNews)


module.exports = router