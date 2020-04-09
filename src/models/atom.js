'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    nome: {
        type: String
    },
    descricao: {
        type: String
    },
    classificacao: {
        type: String
    },
    numero_atomico: {
        type: Number
    },
    simbolo_atomico: {
        type: String
    },
    numero_de_massa: {
        type: Number
    },
    grupo: {
        type: Number
    },
    periodo: {
        type: Number
    },
    ano_da_descoberta: {
        type: Number
    },
    numero_cas: {
        type: String
    },
    descobridor: {
        type: String
    },
    densidade: {
        type: Number
    },
    fusao:{
        type: Number
    },
    ebulicao:{
        type: Number
    },
    valencia:{
        type: Number
    },
    quadra:{
        type: String
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