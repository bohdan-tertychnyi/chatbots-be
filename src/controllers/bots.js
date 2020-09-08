const Service = require('../services/bots')

const Controller = () => {
    
    const get = async (req,res) => {
        const list = await Service.get()

        res.send(list)
    }

    const responseBot = async (socket, botId) => {
        const bots = await Service.get()
        const bot = bots.find(({name}) => name === botId)
        const {answers} = bot
        const message = answers[Math.floor(Math.random()*answers.length)];
        Service.save({message, botId, author: 'bot'})

        socket.emit('response-bot', {message, botId })
    }

    const requestBot = (socket,data) => {
        const {botId, message} = data
        Service.save({message, botId, author: 'user'})

        const minTimeout = 1
        const maxTimeout = 5

        const timeout = Math.round((Math.random() * (maxTimeout - minTimeout) + minTimeout) * 1000);

        setTimeout(() => responseBot(socket,botId), timeout)

    }

    return {
        requestBot,
        get
    }
}

const controller = Controller()

module.exports = controller
