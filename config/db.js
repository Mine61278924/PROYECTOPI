const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async ()=>{
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB CONECTADA');
    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;