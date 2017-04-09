'use strict'

const Product = require('../models/product')

function getProduct(req, res){
	console.log('GET /api/product/' + req.params.id)
	let id_producto = req.params.id
	Product.findById(id_producto, (err, product) => {
		if (err) return res.status(500).send({ mensaje : 'Error al buscar producto en Base de datos' })
		if (!product) return res.status(404).send({ mensaje : 'No existe el producto' })

		res.status(200).send({ product : product })
	})
}

function getProducts(req, res){
	console.log('GET /api/product/')
	Product.find({}, (err, products) => {
		if (err) return res.status(500).send({ mensaje : 'Error al buscar todos los productos de la Base de datos' })
		if (!products) return res.status(404).send({ mensaje : 'No existen productos registrados' })

		res.status(200).send({ products : products })
	})
}

function saveProduct(req, res){
	console.log('POST /api/product/')
	console.log(req.body)

	let product = new Product()
	product.nombre = req.body.nombre
	product.imagen = req.body.imagen
	product.precio = req.body.precio
	product.categoria = req.body.categoria
	product.descripcion = req.body.descripcion

	product.save((err, productStored) => {
		if (err) return res.status(500).send({ mensaje : 'Error al guardar en Base de datos' })

		res.status(200).send({ product : productStored })
	})
}

function updateProduct(req ,res){
	console.log('PUT /api/product/' + req.params.id)
	let id_producto = req.params.id
	let producto_actualizado = req.body
	Product.findByIdAndUpdate(id_producto, producto_actualizado, (err, product) => {
		if (err) return res.status(500).send({ mensaje : 'Error al buscar un producto en Base de datos' })
		if (!product) return res.status(404).send({ mensaje : 'No existe el producto' })

		res.status(200).send({ product : product })
	})
}

function deleteProduct(req, res){
	console.log('DELETE /api/product/' + req.params.id)
	let id_producto = req.params.id
	Product.findById(id_producto, (err, product) => {
		if (err) return res.status(500).send({ mensaje : 'Error al buscar un producto en Base de datos' })
		if (!product) return res.status(404).send({ mensaje : 'No existe el producto' })

		product.remove((err) => {
			if (err) return res.status(500).send({ mensaje : 'Error al eliminar el producto' })

			res.status(200).send({ mensaje : 'Producto eliminado' })
		})
		
	})
}

module.exports = {
	getProduct,
	getProducts,
	saveProduct,
	updateProduct,
	deleteProduct
}