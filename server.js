const exrpress = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path'); 

const { MONGODB_URI } = require('./uri');


const app = exrpress();

const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(MONGODB_URI || 'mongodb://localhost/cb_website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!')
});

// HTTP request logger
app.use(morgan('tiny'));
app.use('/', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));