const { MongoClient } = require('mongodb')
const uri = 'mongodb://localhost:2717'

const GetClient = async () => {
    const client = new MongoClient(uri);
    await client.connect()
    return client
}

module.exports = {
    // Get: 
    // Insert: 
    // Update: 
    // Delete: 
}