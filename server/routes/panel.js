const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Animal = require('../models/Animal');
const Support = require('../models/Support');
const bcrypt = require('bcrypt');
const debug = require('debug')("server:panel");


router.get('/panel/:id', (req, res, next) => {
    const userId = req.params.id
    Support.find({ userId: userId })
        .populate('animalId')
        .then(support => {
            console.log("support")
            console.log(support)
            res.json(support).status(200);
        })
        .catch(err => res.json(err).status(500));
});

router.post('/panel/:id', (req, res, next) => {
    const { username, password } = req.body;
    const userId = req.params.id;

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    const theUser = new User({
        username,
        password: hashPass
    });

    User.findByIdAndUpdate({ userId: userId }, { theUser }, { new: true })
        .then(updatedUser => {
            debug(`Changes user ${user._id}. Change ${user.username}`);
            req.user = updatedUser
            res.status(200).json(req.user)
        })
        .catch(e => {
            console.log(e);
            res.status(500).json(e)
        })
});

module.exports = router;