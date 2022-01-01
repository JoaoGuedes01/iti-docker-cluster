// Imports
const mongoose = require('mongoose');

//IP da base de dados mongo
let databaseIP = 'mongo';
//Porta predefinida é 27017 mas a docker container que está a correr mongo está a usar a porta 5000 do host
let databasePort = "27017";
//Nome da base de dados mongo iti
let databaseName = 'iti';

//URI de ligação
const URI = "mongodb://" + databaseIP + ":" + databasePort + "/" + databaseName;

//Função de conexão
const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Connected to the Database');
    } catch (err) {
        console.log('There was an error connecting to the database \n error: ' + err);
    }
}

//Exports
module.exports = connectDB;