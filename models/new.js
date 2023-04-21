const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('New', newSchema);