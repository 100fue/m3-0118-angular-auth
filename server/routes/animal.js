const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');
const Support = require('../models/Support');

router.get('/list', (req, res, next) => {
    Animal.find()
        .then(animals => {
            res.json(animals).status(200);
        })
        .catch(err => res.json(err).status(500));
});

router.get('/list/:id', (req, res, next) => {
    Animal.findById(req.params.id)
        .then(animal => {
            console.log(animal)
            res.json(animal).status(200);
        })
        .catch(err => res.json(err).status(500));
});

//SUPPORT

router.post('/list/:id/support', (req, res, next) => {

    userId = req.user._id;
    animalId = req.params.id;
    support = req.body.support;

    new Support({
        userId,
        animalId,
        support
    }).save()

    Animal.findByIdAndUpdate(
        animalId,
        { support },
        { new: true })
        .then(updatedSupport => res.status(200).json(updatedSupport))
        .catch(e =>
            res.status(500).json(e)
        )
});

module.exports = router;