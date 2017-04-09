'use strict'

const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')
const port = config.port

mongoose.connect(config.db, (err, res) => {
	if (err){
		return console.log('Error en la conexion con la base de datos => ' + err)
	}

	console.log('Conexion con la base de datos establecida...')

	app.listen(port, () => {
		console.log('API REST corriendo en http://localhost:'+port)
	})
})

