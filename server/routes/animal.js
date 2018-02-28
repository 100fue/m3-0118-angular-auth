const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');

router.get('/list', (req, res, next) => {
    Animal.find()
        .then(animals=>{
            res.json(animals).status(200);
        })
        .catch(err => res.json(err).status(500));
});

router.get('/:id', (req, res, next) => {
    Animal.findById(req.params.id)
        .then(animal=>{
            res.json(animal).status(200);
        })
        .catch(err => res.json(err).status(500));
});

module.exports = router;