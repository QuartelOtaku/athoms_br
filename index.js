var restify = require('restify')


var server = restify.createServer({
    name: 'Atoms BR API'
})

server.get('/hello', hellof)

server.listen(5000, function () {
    console.log('%s sendo executado', server.name)
})