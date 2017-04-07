'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

app.get('/api/product/', (req, res) => {
	res.status(200).send({products : []})
})

app.get('/api/product/:id', (req, res) => {

})

app.post('/api/product/', (req, res) => {
	console.log(req.body)
	res.status(200).send({message : 'producto actualizado'})
})

app.put('/api/product/:id', (req, res) => {

})

app.delete('/api/product/:id', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
	if (err){
		return console.log('Error en la conexion con la base de datos => ' + err)
	}

	console.log('Conexion con la base de datos establecida...')

	app.listen(port, () => {
		console.log('API REST corriendo en http://localhost:'+port)
	})
})

