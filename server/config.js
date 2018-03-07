const mongoose = require('mongoose');

require('dotenv').config();
module.exports = {
    dbURL: mongoose.connect(process.env.MONGODB_URI)
}