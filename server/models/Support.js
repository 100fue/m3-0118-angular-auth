const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supportSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        animalId: {
            type: Schema.Types.ObjectId,
            ref: 'Animal'
        },
        support: Number
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Support = mongoose.model('Support', supportSchema);
module.exports = Support;