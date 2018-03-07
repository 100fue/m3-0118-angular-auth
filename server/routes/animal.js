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

//SUPPORT

router.post('/list/:id/support', (req, res, next) => {

    userId = req.user._id;
    animalId = req.params.id;
    support = req.body.support;

    console.log('AAA')
    return Promise.all([
        new Support({ userId, animalId, support }).save(),
        Animal.findById(animalId),
    ])
    .then(([newSupport, animal]) => {
        const newAnimalTime = getNewAnimalTime(animal, newSupport);
        return Animal.findByIdAndUpdate(animalId, { time: newAnimalTime }, { new: true })
            .then((animal) => res.status(200).json(animal));

    })
    .catch(e => {
        console.log('Error => ', e);
        res.status(500).json(e)
    })
});

router.get('/list/:id', (req, res, next) => {
    Animal.findById(req.params.id)
        .then(animal => {
            console.log(animal)
            res.json(animal).status(200);
        })
        .catch(err => res.json(err).status(500));
});

function getNewAnimalTime(animal, newSupport) {
    let countDownDate = new Date(animal.time).getTime();

    const oneHour = 3600000;
    let sum = countDownDate;

    console.log(animal);
    console.log(animal.time);
    console.log(newSupport);

    console.log(newSupport.support);
    switch (newSupport.support) {
        case 5:
            sum = (oneHour * 11) + countDownDate;
            break;
        case 10:
            sum = (oneHour * 24) + countDownDate;
            break;
        default:
            sum = (oneHour * 2) + countDownDate;
            break;
    }

    console.log(sum);
    let curdate = new Date(sum);
    return curdate.toLocaleString();
}



module.exports = router;