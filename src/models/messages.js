const db = require('../db')

const Model = () => {
    const collectionName = 'messages'

    const get = async () => {
        const {docs} = await db.collection(collectionName).get()
        const list = docs.map(doc => doc.data())
 
        return list
    }

    const set = async (payload) => {
        payload.forEach(fields => {
            const message = db.collection(collectionName).doc()
            message.set({...fields}) 
        })
    }

    const del = async () => {
        const {docs} = await db.collection(collectionName).get()

        docs.forEach(({id}) => {
            db.collection(collectionName).doc(id).delete()
        })
    }

    const create = async ({...fields}) => {
        const id = `${Date.now()}`
        const message = db.collection(collectionName).doc(id)

        message.set({...fields})
 
    }

    return {
        get,
        set,
        del,
        create
    }
}

const model = Model()

module.exports = model