'use strict'

exports.get = (req, res, next) => {
    Atomo
        .find({}, 'nome numero_atomico simbolo_atomico').then(data=>{
        res.status(201).send(data)
    }).catch(e => {
        res.status(400).send(e)
    })
}

exports.post = (req, res, next) => {
    var atomo = new Atomo(req.body)
    atomo.save().then(x=>{
        res.status(201).send({message: 'Atomo cadastrado com sucesso!'})
    }).catch(e => {
        res.status(400).send({message: 'Falha ao cadastrar o átomo', data: e})
    })
    res.status(201).send(req.body)
}

exports.put = (req, res, next) => {
    const id = req.params.id
    res.status(201).send({
        id: id,
        item: req.body
    })
}

exports.delete = (req, res, next) => {
    res.status(200).send(req.body)
}