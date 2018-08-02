'use strict';

var mongoose = require('mongoose'),
    Contact = mongoose.model('Contacts');

exports.list_all_contact = function (req, res) {
    Contact.find({}, function (err, contact) {
        if (err) {
            res.send(err);
            res.json({message: 'error fetching'})
        }
        res.json(contact);

    })
};

exports.create_all_contact = function (req, res) {
    var new_contact = new Contact(req.body);
    new_contact.save(function (err, contact) {
        if (err) {
            res.send(err);
            res.json({message: 'show error'});
        }
        res.json(contact);
    })
};