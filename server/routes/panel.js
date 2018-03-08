const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Animal = require('../models/Animal');
const Support = require('../models/Support');
const bcrypt = require('bcrypt');
const debug = require('debug')("server:panel");

router.post('/panel/:id/username', (req, res, next) => {
    const { username } = req.body;
    const userId = req.params.id;
    User.findByIdAndUpdate(userId, { username }, { new: true })
        .then(updatedUser => {
            debug(`Changes user ${updatedUser._id}. Change ${updatedUser.username}`);
            req.user = updatedUser
            res.status(200).json(req.user)
        })
        .catch(e => {
            console.log(e);
            res.status(500).json(e)
        })
});



router.post('/panel/:id/password', (req, res, next) => {
    const { password } = req.body;
    const userId = req.params.id;

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    User.findByIdAndUpdate(userId, { password: hashPass }, { new: true })
        .then(updatedUser => {
            debug(`Changes user ${updatedUser._id}. Change ${updatedUser.password}`);
            req.user = updatedUser
            res.status(200).json(req.user)
        })
        .catch(e => {
            console.log(e);
            res.status(500).json(e)
        })
});

router.get('/panel/:id', (req, res, next) => {
    const userId = req.params.id
    Support.find({ userId: userId })
        .populate('animalId')
        .then(support => {
            res.json(support).status(200);
        })
        .catch(err => res.json(err).status(500));
});

module.exports = router;