const { MongoClient } = require('mongodb');
const { use } = require('../routes');
const uri = 'mongodb://localhost:2717'

const GetClient = async () => {
    const client = new MongoClient(uri);
    await client.connect()
    return client
}

const executeQuery = async (query) => {
    const client = new MongoClient(uri);
    let result
    try{
        result = await query(client)
    } catch (err){
        console.log(err)
    } finally {
        await client.close()
        return result
    }
}

const GetUserByEmail = async (email) => {
    let result = await executeQuery(async(client) =>{
        const database = client.db('will_to_live');
        const collection = database.collection('users');
        const query = {email: email};
        let userData = await collection.findOne(query);
        
        if (userData && userData.email === email) {
            return userData;
        } else {
            return null;
        }
    });

    return result;
}

const GetUserByID = async (id) => {
    const client = new MongoClient(uri);
    let userData
    try{
        const database = client.db('will_to_live')
        const collection = database.collection('users')
        const query = {ID: id}
        userData = await collection.findOne(query)
    } catch (err){
        console.log(err)
    } finally {
        await client.close()
        return userData
    }

     
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

const GetNumberOfUsers = async () => {
    const client = new MongoClient(uri);
    let num
    try{
        const database = client.db('will_to_live')
        const collection = database.collection('users')
        num = await collection.countDocuments()
        return num
    } catch (err){
        console.log(err)
    } finally {
        await client.close()
        return num
    }
}

module.exports = {
    GetUserByEmail: GetUserByEmail,
    GetUserByID: GetUserByID,
    CreateUser: CreateUser,
    UpdateUser: UpdateUser,
    GetNumberOfUsers: GetNumberOfUsers
}