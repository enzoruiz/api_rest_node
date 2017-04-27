'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./routes/index')
const hbs = require('express-handlebars')

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

// USANDO HANDLEBARS PARA LAS VISTAS
app.engine('.hbs', hbs({
	default: 'default',
	extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api)

app.use('/login', (req, res) => {
	res.render('login')
})

app.use('/', (req, res) => {
	res.render('products')
})

module.exports = app