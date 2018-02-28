const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    time: {
        type: Number,
        required: [true, 'time is required']
    },
    name: {
        type: String,
        required: [true, 'name is required']
    },
    age: {
        type: Number,
        required: [true, 'age is required']
    },
    hobbies: {
        type: String,
        required: [true, 'hobbies is required']
    },
    location: {
        lat: {
            type: Number,
            required: [true, 'lat is required']
        },
        lng: {
            type: Number,
            required: [true, 'lng is required']
        }
    },
    photos: [{
        type: String,
        required: [true, 'photos are required']
    }],
    videos: [{
        type: String,
        required: [true, 'videos are required']
    }]

}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;