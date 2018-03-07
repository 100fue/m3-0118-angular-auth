const mongoose = require('mongoose');
const Animal = require('../models/Animal');
const User = require('../models/User');
const {dbURL} = require('../config');

mongoose.Promise = Promise;

const animalArray = [
  {
    time: "2018-9-11 08:37:25",
    name: "Florinda",
    age: 12,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 40.4893538,
        lng: -3.6827461
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  },
  {
    time: "2018-10-7 17:37:25",
    name: "Catalina",
    age: 9,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 51.678418,
        lng: 7.809007
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  },
  {
    time: "2018-7-6 15:37:25",
    name: "Esperanza",
    age: 4,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 40.4893538,
        lng: -3.6827461
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  },
  {
    time: "Sep 18, 2018 15:37:25",
    name: "Clotilde",
    age: 7,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 51.678418,
        lng: 7.809007
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  },
  {
    time: "2018-6-22 15:37:25",
    name: "Lucrecia",
    age: 10,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 40.4893538,
        lng: -3.6827461
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  },
  {
    time: "2018-6-22 15:37:25",
    name: "Antonia",
    age: 14,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 51.678418,
        lng: 7.809007
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  }
]

const userArray = 
    {
      username: "miguel",
      password: "123",
      email: "m@m.com",
      photo: "http://www.dogguie.net/wp-content/uploads/2010/04/toma-shopas-dientes-08.jpg"
    }
  

Animal.collection.drop();
User.collection.drop();

Promise.all([User.create(userArray),Animal.create(animalArray)])
    .then(array=>{
        console.log('Seeds Created!');
        mongoose.connection.close();

    })
    .catch(err=>console.log(err));