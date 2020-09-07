const app = require('express')()
const cors = require('cors')
require('./models/bots')
require('./db')
require('./migrations/bots')
const {requestBot, get: getBots} = require('./controllers/bots')

app.use(cors())

const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 3337

// app.get('/', get)

app.get('/bots', getBots)

io.on('connection', (socket) => {
    // socket.on('request-bot', )

    socket.on('request-bot', data => requestBot(socket, data))
})

http.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

