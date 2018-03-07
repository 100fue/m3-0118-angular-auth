const mongoose = require('mongoose')
require('dotenv').config();

const dbURL = process.env.MONGODB_URI

mongoose.connect(dbURL)
    .then(() => debug(`Conectado a la bbdd ${dbURL}`))
    .catch(e => {
        console.error(`ERR al conectar con la bbdd ${dbURL}`)
    })