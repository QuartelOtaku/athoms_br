const app = require('../src/app') //Referencia ao app que está dentro de src
const debug = require('debug')('nodestr:server')
const http = require('http')
const port = normalize_port(process.env.PORT || '1515')

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', on_error)
server.on('listening', on_listening)
console.log('API rodando na porta '+port)

function normalize_port(val) {
    const port = parseInt(val, 10) //O valor recebido como parâmetro é convertido para int
    if(isNaN(port)){ // Se deu erro na conversão
        return val // Retorne o valor informado
    }
    if (port >= 0){ // Se a porta é um endereço maior ou igual a 0
        return port  // Retorne a porta
    }
    return false
}

function on_error(error){
    if (error.syscall !== 'listen'){
        throw error
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
    switch (error.code) {
        case 'EACCES': //Erro de permissão
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE': //Erro de endereço em uso
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

function on_listening () {
    const addr = server.address()
    const bind = typeof addr === 'string' ? 'pipe' + addr : 'port ' + addr.port
    debug('Listening on '+ bind)
}