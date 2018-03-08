require('dotenv').config();
const mongoose = require('mongoose');
const Animal = require('../models/Animal');
const User = require('../models/User');
const {dbURL} = require('../config');

console.log("mongodb://100fue:100fue@ds261078.mlab.com:61078/dbproject3")

mongoose.Promise = Promise;

const animalArray = [
  {
    time: "2018-3-10 17:37:25",
    name: "Florinda",
    age: 12,
    hobbies: "She loves work out, walk freedon and chill out with friends",
    location: {
        lat: 40.4893538,
        lng: -3.6827461
    },
    photos: "http://res.cloudinary.com/dtx2uzngv/image/upload/v1520520213/cow-5.jpg",
    videos: "aqui va el video"
  },
  {
    time: "2018-5-7 11:10:49",
    name: "Catalina",
    age: 9,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 51.678418,
        lng: 7.809007
    },
    photos: "http://res.cloudinary.com/dtx2uzngv/image/upload/v1520520211/cow-2.jpg",
    videos: "aqui va el video"
  },
  {
    time: "2018-4-6 15:14:31",
    name: "Esperanza",
    age: 4,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 40.4893538,
        lng: -3.6827461
    },
    photos: "http://res.cloudinary.com/dtx2uzngv/image/upload/v1520520211/cow-1.jpg",
    videos: "aqui va el video"
  },
  {
    time: "Sep 11, 2018 15:22:25",
    name: "Clotilde",
    age: 7,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 51.678418,
        lng: 7.809007
    },
    photos: "http://res.cloudinary.com/dtx2uzngv/image/upload/v1520520211/cow-3.jpg",
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
    photos: "http://res.cloudinary.com/dtx2uzngv/image/upload/v1520520211/cow-4.jpg",
    videos: "aqui va el video"
  },
  {
    time: "2018-5-22 11:11:11",
    name: "Antonia",
    age: 14,
    hobbies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: {
        lat: 51.678418,
        lng: 7.809007
    },
    photos: "http://res.cloudinary.com/dtx2uzngv/image/upload/v1520520210/cow-6.jpg",
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
  
    mongoose.connect("mongodb://100fue:100fue@ds261078.mlab.com:61078/dbproject3")
    .then(()=> console.log("Connected to DB"))
    .catch(e => console.error(e));


Animal.collection.drop();
User.collection.drop();

Promise.all([User.create(userArray),Animal.create(animalArray)])
    .then(array=>{
        console.log('Seeds Created!');
        mongoose.connection.close();

    })
    .catch(err=>console.log(err));