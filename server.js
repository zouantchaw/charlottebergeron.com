const exrpress = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const { MONGODB_URI } = require('./uri');


const app = exrpress();

const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

//To disconnect from Atlas, remove: 
// MONGODB_URI

mongoose.connect('mongodb://localhost/cb_website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!')
});

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));