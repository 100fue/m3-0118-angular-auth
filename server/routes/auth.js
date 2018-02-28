const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const debug = require('debug')("server:auth");
const passport = require('passport')

let loginPromise = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, e => e? reject(e):resolve(user))
  })
}

/* SIGNUP */
router.post('/signup', (req, res, next) => {
  const {username,password,email} = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Provide username and password' })
  User.findOne({ username }, '_id')
    .then(foundUser =>{
      if (foundUser) return res.status(400).json({ message: 'The username already exists' });
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const theUser = new User({
        username,
        password: hashPass,
        email
      });
      return theUser.save()
          // .then(user => loginPromise(req,user))
          .then(user => {
            debug(`Registered user ${user._id}. Welcome ${user.username}`);
            req.user = user
            res.status(200).json(req.user)
          }) 
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e)
    }) 
});

/* LOGIN */
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    if (!theUser) return res.status(401).json(failureDetails);
    loginPromise(req,theUser)
      .then(() => res.status(200).json(req.user))
      .catch(e => res.status(500).json({ message: 'Something went wrong' }));
  })(req, res, next);
});

/* LOGOUT */
router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

/* LOGGEDIN */
router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) return res.status(200).json(req.user);
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;
