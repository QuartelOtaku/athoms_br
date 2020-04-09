'use strict'
const express = require('express')
const app = express()

const router = express.Router()

const route = router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: 'Athoms BR API',
        version: '1.0.0'
    })
})
app.use('/', route)

module.exports = app
