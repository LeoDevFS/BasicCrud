const express = require('express')
const ProductController = require('../controllers/ContactsControllers')
const router = express.Router()
const Contact = require('../models/Contacts')

router.get('/',ProductController.getAll)
router.get('/id/:_id',ProductController.getByID)

router.post('/create',ProductController.create)

router.delete('/id/:_id',ProductController.deleteById)

router.put('/id/:_id',ProductController.updateByID)


module.exports = router
