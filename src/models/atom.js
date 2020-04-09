'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    classificacao: {
        type: String,
        required: true
    },
    numero_atomico: {
        type: Number,
        required: true
    },
    simbolo_atomico: {
        type: String,
        required: true
    },
    numero_de_massa: {
        type: Number,
        required: true
    },
    grupo: {
        type: Number,
        required: true
    },
    periodo: {
        type: Number,
        required: true
    },
    ano_da_descoberta: {
        type: Number
    },
    numero_cas: {
        type: String,
        required: true
    },
    descobridor: {
        type: String
    },
    densidade: {
        type: Number,
        required: true
    },
    fusao:{
        type: Number,
        required: true
    },
    ebulicao:{
        type: Number,
        required: true
    },
    valencia:{
        type: Number,
        required: true
    },
    quadra:{
        type: String,
        required: true
    },
    comp_universo: {
        type: Number
    },
    comp_sol: {
        type: Number
    },
    comp_oceano: {
        type: Number
    },
    comp_crosta_terrestre: {
        type: Number
    },
    comp_meteoritos: {
        type: Number
    }
})

module.exports = mongoose.model('Atomo', schema)