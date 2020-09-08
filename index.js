const app = require('express')()
const cors = require('cors')

const {requestBot, get: getBots} = require('./src/controllers/bots')

app.use(cors())

const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 3337

app.get('/bots', getBots)

io.on('connection', (socket) => {
    socket.on('request-bot', data => requestBot(socket, data))
})

http.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

