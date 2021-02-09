const express = require('express');

const router = express.Router();

const Essay = require('../models/essay');

//Routes
router.get('/essays', (req, res) => {

    Essay.find({ })
        .then((data) => {
            console.log('data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error)
        });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'wizzzz',
        age: 5
    };
    res.json(data);
});

module.exports = router;