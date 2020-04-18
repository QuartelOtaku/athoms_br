function lista_atomos(){
    try{
        const objeto_json = require('./atomos_json.json')
        return objeto_json.data
    }catch (e) {
        console.log('Erro na abertura do arquivo atomos_json.json')
        return process.exit(-1)
    }
}

const express = require('express')
const app = express()
const porta = 1515
const atomos = lista_atomos()

app.get('/atomo/:id', (req, res) => {
    posicao = req.params.id - 1
    if (posicao >= atomos.length){
        return res.json({response: 'Ainda não temos o átomo de número atômico '+(posicao+1)+' registrado'})
    }
    return res.json(atomos[posicao])
})

app.get('/atomo/desc/:id', (req, res) => {
    posicao = req.params.id - 1
    if (posicao >= atomos.length){
        return res.json({response: 'Ainda não temos o átomo de número atômico '+(posicao+1)+' registrado'})
    }
    return res.json(atomos[posicao].visao_geral.descricao)
})

app.get('/atomo/name/:id', (req, res) => {
    posicao = req.params.id - 1
    if (posicao >= atomos.length){
        return res.json({response: 'Ainda não temos o átomo de número atômico '+(posicao+1)+' registrado'})
    }
    return res.json(atomos[posicao].visao_geral.nome)
})

app.listen(porta, () =>{
    console.log('Servidor iniciando na porta '+porta)
})