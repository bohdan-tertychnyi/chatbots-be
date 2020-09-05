const app = require('express')()
const cors = require('cors')
app.use(cors())
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 3337

app.get('/', (req, res) => {
    res.send('Hello World')
})

io.on('connection', (socket) => {
    console.log('user connected')
})

http.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

