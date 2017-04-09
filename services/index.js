'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

/*
	sub : identificador de usuario (no deberia ser id tabla User)
*/
function createToken(user){
	const payload = {
		sub: user._id,
		iat: moment().unix(),
		exp: moment().add(14, 'days').unix()
	}

	jwt.encode(payload, config.SECRET_TOKEN)
}

module.exports = createToken