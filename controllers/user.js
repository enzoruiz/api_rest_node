'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function registro (req, res){
	const user = new User({
		email: req.body.email,
		displayName: req.body.displayName
	})

	user.save((err, userStored) => {
		if (err) return res.status(500).send({ mensaje : 'Error al registrar el usuario: ' + err })

		return res.status(200).send({ token : service.createToken(userStored) })
	})
}

function login (){

}

module.exports = {
	registro, 
	login
}