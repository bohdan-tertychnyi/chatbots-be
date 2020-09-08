const Model = require('../models/bots')
const Messages = require('./messages')


const Service = () => {
    const get = async () => {
        const list = await Model.getBots()
        const messages = await Messages.get()

        return list.map(({name, icon, answers}) => {
            const messageHistory = messages.filter(({chatId}) => chatId === name)

            return {name, messageHistory, icon, answers}
        })
    }

    const save = ({message, botId, author}) => {
        Messages.create({
            value : message,
            chatId : botId,
            createTime: Date.now(),
            author
        })
    }

    return {
        get,
        save
    }
}

const service = Service()

module.exports = service
