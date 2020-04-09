'use strict'
const express = require('express')
const body_parser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

//Carrega os Models
const Atomo = require('./models/atom')

// Conecta ao banco
mongoose.connect('mongodb+srv://PierreVieira:Nk0oUAr2NmB6N3UL@cluster0-xxoar.gcp.mongodb.net/test?retryWrites=true&w=majority')

// Carrega as rotas
const index_route = require('./routes/index_routes')
const atom_route = require('./routes/atom_routes')

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
app.use('/atoms', atom_route)

module.exports = app
