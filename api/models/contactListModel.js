'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    firstName: {
        type: String,
        required: 'kindly enter name'
    },
    lastName: {
        type: String,
        required: 'kindly enter name'
    },
    email: {
        type: String,
        required: 'kindly enter email'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Contacts', contactSchema);