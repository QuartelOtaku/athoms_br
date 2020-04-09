'use strict'
const express = require('express')
const body_parser = require('body-parser')

const app = express()
const router = express.Router()

// Carrega as rotas
const index_route = require('./routes/index_routes')
const product_route = require('./routes/products_routes')

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:false}))
/*
* 200: ok
* 201: created
* 400: erro de request
* 401: não autenticado
* 403: acesso negado
* 500: internal server error*/
app.use('/', index_route)
app.use('/products', product_route)

module.exports = app
