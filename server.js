const exrpress = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = exrpress();

const PORT = process.env.PORT || 8080;

// HTTP request logger
app.use(morgan('tiny'));

app.get('/api', (req, res) => {
    const data = {
        username: 'test',
        age: 5
    };
    res.json(data);
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'wizzzz',
        age: 5
    };
    res.json(data);
});