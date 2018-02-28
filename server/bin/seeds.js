const mongoose = require('mongoose');
const Animal = require('../models/Animal');
const User = require('../models/User');
const dbName = 'project3';

mongoose.connect(`mongodb://localhost/${dbName}`)
    .then(res=>console.log(`conected to ${dbName}`))
    .catch(err=>console.log(err));

mongoose.Promise = Promise;

const animalArray = [
  {
    time: "90000000",
    name: "catalina",
    age: 12,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 3344,
        lng: 4555
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  },
  {
    time: "90000000",
    name: "catalina",
    age: 12,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 3344,
        lng: 4555
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  },
  {
    time: "90000000",
    name: "catalina",
    age: 12,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 3344,
        lng: 4555
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  },
  {
    time: "90000000",
    name: "catalina",
    age: 12,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 3344,
        lng: 4555
    },
    photos: "https://respuestas.tips/wp-content/uploads/2013/10/rana.1-1024x683.jpg",
    videos: "aqui va el video"
  },
  {
    time: "90000000",
    name: "catalina",
    age: 12,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 3344,
        lng: 4555
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