'use strcit'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/products_controllers')

router.post('/', controller.post)
router.put('/:id', controller.put)
router.delete('/', controller.delete)

module.exports = router