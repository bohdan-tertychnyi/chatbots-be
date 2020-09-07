const db = require('../db')

console.log({db})

const Bots = () => {
    let bots = {}

    const getBots = async () => {
        bots = db.collection('bots').get()
        const {docs} = await bots
        const docsList = []

        docs.forEach(doc => {
            docsList.push(doc.data())
        })

        return docsList

    }

    const deleteBots = async () => {
        const {docs} = await db.collection('bots').get()

        console.log('docs', docs)

        docs.forEach(({id}) => {
            console.log(id)

            db.collection('bots').doc(id).delete()
        })
    }

    const createBots = async (payload) => {
        payload.forEach(fields => {
            const bot = db.collection('bots').doc()
            bot.set({...fields}) 
        })
    }

    return {
        getBots,
        createBots,
        deleteBots
    }
}

Bots().getBots()

module.exports = Bots()
