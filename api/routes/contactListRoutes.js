'use strict';

module.exports = function (app) {
    var contactList = require('../controllers/contactListController');

    app.route('/api/contacts').get(contactList.list_all_contact)
        .put(contactList.create_all_contact);
};