const model = require('../models/bots')

const Controller = () => {
    let bots = []
    
    const get = async (req,res) => {
        const list = await model.getBots()



        res.send(list.map(({name, messageHistory, icon}) => ({name, messageHistory, icon})))
    }

    const initBots = async () => {
        bots = await model.getBots()
    } 

    const responseBot = async (socket, botId) => {
        console.log(botId)
        const bot = bots.find(({name}) => name === botId)
        const {answers} = bot

        const message = answers[Math.floor(Math.random()*answers.length)];


        console.log('responseBot bots', bot, botId)


        socket.emit('response-bot', {message, botId })
    }

    const requestBot = (socket,data) => {
        const {botId, message} = data

        const minTimeout = 1
        const maxTimeout = 5

        const timeout = Math.round((Math.random() * (maxTimeout - minTimeout) + minTimeout) * 1000);

        setTimeout(() => responseBot(socket,botId), timeout)

    }

    return {
        requestBot,
        initBots,
        get
    }
}

const controller = Controller()

console.log({controller})

controller.initBots()

module.exports = controller
