const { Socket } = require('dgram')

var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('Usuario desconectado')
    })
})


//io.emit('some event', {
//    someProperty: 'some value',
//    otherProperty: 'other value'
//})

http.listen(3000, () => {
    console.log('Conectado a porta 3000')
})