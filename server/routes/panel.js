const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Animal = require('../models/Animal');
const Support = require('../models/Support');


router.get('/panel/:id', (req, res, next) => {
    const userId = req.params.id
    Support.find({userId: userId})
    .populate('animalId')
        .then(support => {
            console.log("support")
            console.log(support)
            res.json(support).status(200);
        })
        .catch(err => res.json(err).status(500));
});

module.exports = router;