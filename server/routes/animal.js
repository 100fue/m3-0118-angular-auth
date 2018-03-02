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

    console.log('AAAA', support)

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

router.get('/list/:id', (req, res, next) => {
    Animal.findById(req.params.id)
        .then(animal => {
            console.log(animal)
            res.json(animal).status(200);
        })
        .catch(err => res.json(err).status(500));
});

// function setTimeAnimal() {
//     var countDownDate = new Date(Animal.collection.time).getTime();
//     const a1uno = 7200000;
//     const a5once = 39600000;
//     const a10veinticuatro = 86400000;

//     if (Animal.collection.time == 1) {
//         var sum = a1uno + countDownDate;
        
//         var curdate = new Date(null);
//         curdate.setTime(sum);
//         var support = curdate.toLocaleString();
//     }

//     else if (Animal.collection.time == 5) {
//         var sum = a5once + countDownDate;
        
//         var curdate = new Date(null);
//         curdate.setTime(sum);
//         var support = curdate.toLocaleString();
//     }

//     else if (Animal.collection.time == 10) {
//         var sum = a10veinticuatro + countDownDate;
        
//         var curdate = new Date(null);
//         curdate.setTime(sum);
//         var time = curdate.toLocaleString();   
//     }
//     return time;
// }



module.exports = router;