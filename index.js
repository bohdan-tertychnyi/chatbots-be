const app = require('express')()
const cors = require('cors')

app.use(cors())

const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 3337

app.get('/', (req, res) => {
    res.send('Hello World')
})

// const connections = []

io.on('connection', (socket) => {
    // connections.push(socket)
    // socket.on('disconnect', data => {
    //   console.log(data)
    // })

    socket.on('request-bot', data => {
      const {botId, message} = data
      // switch (botId) {
      //   case value:
          
      //     break;
      
      //   default:
      //     break;
      // }

      console.log('OPERATING WITH DB ...')

      socket.emit('response-bot', {message: Math.round(Math.random() * 100)})
    })
})

http.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

