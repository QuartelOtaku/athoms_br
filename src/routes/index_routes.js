'use strcit'

//Exoress e router são necessários para criar a rota
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Atoms BR API",
        version: "1.0.0"
    })
})

module.exports = router