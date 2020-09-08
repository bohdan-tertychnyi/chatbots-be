const Model = require('../models/messages')

const Service = () => {
    const get = async () => {
        const list = await Model.get()
        
        return list.reverse()
    }

    const create = (payload) => {
        Model.create(payload)
    }
    
    return {
        get,
        create
    }
}

const service = Service()

module.exports = service