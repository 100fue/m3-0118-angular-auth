const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inputSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Animal'
    },
    input: Number
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Input = mongoose.model('User', inputSchema);
module.exports = Input;