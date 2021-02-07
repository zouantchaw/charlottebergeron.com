const exrpress = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path'); 

const { MONGODB_URI } = require('./uri');


const app = exrpress();

const PORT = process.env.PORT || 8080;

mongoose.connect(MONGODB_URI || 'mongodb://localhost/cb_website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!')
});

// Schema 
const Schema = mongoose.Schema;
const EssaySchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model 
const Essay = mongoose.model('Essay', EssaySchema);

//Saving data to mongo db
const data = {
    title: 'Welcome to my website',
    body: "Testing to see if this database connection is working"
};

const newEssay = new Essay(data); // Instance of model
newEssay.save((error) => {
    if (error) {
        console.log('Ooops, something happened');
    } else {
        console.log('Data has been saved!!');
    }
})
// .save();


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

app.listen(PORT, console.log(`Server is starting at ${PORT}`))