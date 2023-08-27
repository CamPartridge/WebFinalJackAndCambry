const { MongoClient } = require('mongodb')
const uri = 'mongodb://localhost:2717'

const GetClient = async () => {
    const client = new MongoClient(uri);
    await client.connect()
    return client
}

const executeQuery = async (query) => {
    const client = new MongoClient(uri);
    try{
        await query(client)
    } catch (err){
        console.log(err)
    } finally {
        await client.close()
    }
}

const GetUserByUsername = async (callback, username) => {
    executeQuery(async(client) =>{
        const database = client.db('will_to_live')
        const collection = database.collection('users')
        const query = {username: username}
        let userData = await collection.findOne(query)

        callback(userData)
    })
}

const GetUserByID = async (callback, id) => {
    executeQuery(async(client) => {
        const database = client.db('will_to_live')
        const collection = database.collection('users')
        const query = {ID: id}
        let userData = await collection.findOne(query)

        callback(userData)
    })
}

const CreateUser = async (newUser) => {
    executeQuery(async(client) => {
        const database = client.db('will_to_live')
        const collection = database.collection('users')
        newUser.ID = await collection.countDocuments()
        await collection.insertOne(newUser)
    })
}

const UpdateUser = async (changedUser, username) => {
    executeQuery(async(client) => {
        const database = client.db('will_to_live')
        const collection = database.collection('users')
        let user = await collection.findOne({username: username} )
        if(user == null){
            throw new Error("User not Found")
        }
        await collection.updateOne({username: username}, {$set: changedUser})
    })
}

module.exports = {
    GetUserByUsername: GetUserByUsername,
    GetUserByID: GetUserByID,
    CreateUser: CreateUser,
    UpdateUser: UpdateUser
}