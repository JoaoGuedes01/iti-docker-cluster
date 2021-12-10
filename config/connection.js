const mongoose = require('mongoose');


const URI = "mongodb://localhost:27017/iti";


const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    });
    console.log('Connected to the Database');
}

module.exports = connectDB;