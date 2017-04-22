'use strict'

const express = require('express')
const api = express.Router()
const auth = require('../middlewares/auth')
const productController = require('../controllers/product')
const userController = require('../controllers/user')

api.get('/product/', productController.getProducts)
api.get('/product/:id', auth, productController.getProduct)
api.post('/product/', auth, productController.saveProduct)
api.put('/product/:id', auth, productController.updateProduct)
api.delete('/product/:id', auth, productController.deleteProduct)
api.post('/registro', userController.registro)
api.post('/login', userController.login)
api.get('/private', auth, (req, res) => {
	res.status(200).send('Tienes acceso :)')
})

module.exports = api