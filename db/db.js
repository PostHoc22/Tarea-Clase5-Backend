const mongoose = require('mongoose');
require('dotenv').config(); //la configuracion del require dotenv permite el uso del enviroment (.env = MONGO_CNN)

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )

        console.log('Base de datos conectada');
    } catch {
        console.log('Error a la hora de iniciar la base de datos');
    }
}   

module.exports = {dbConnection}