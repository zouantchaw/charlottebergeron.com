const mongoose = require('mongoose');

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

module.exports = Essay;