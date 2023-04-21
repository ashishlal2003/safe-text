const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    titleId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'New'
    },
    files:[{
        type: String
    }]
});

module.exports = mongoose.model('Text', textSchema);