const http = require('http')
const debug = require('debug')('nodestr:server')
const express = require('express')

const app = express()
const port = 1515
app.set('port', port)

const server = http.createServer(app)
const router = express.Router()

const route = router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: 'Athoms BR API',
        version: '1.0.0'
    })
})
app.use('/', route)
server.listen(port)
console.log('API rodando na porta '+port)
