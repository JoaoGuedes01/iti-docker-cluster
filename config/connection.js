const mongoose = require('mongoose');

let databaseIP = '192.168.0.102';
let databaseName = 'iti'

const URI = "mongodb://" + databaseIP + ":27017/" + databaseName;

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Connected to the Database');
}

module.exports = connectDB;