const Model = require('../models/messages')

const createMessages = () => { //eslint-disable-line
    const payload = [
        {
            author: 'bot',
            chatId : 'Woland',
            index : 0,
            value : 'hello',
            createTime: Date.now()
        }
    ]

    Model.set(payload)
}

const deleteMessages = () => {
    Model.del()
}

// createMessages()

deleteMessages()

