const path = require('path');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;


mongoose = require('mongoose'),
    Contact = require('./api/models/contactListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/contactdb', {useNewUrlParser: true});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('*', function (request, response) {
//     response.sendFile(path.resolve(__dirname, './brain/public', 'index.html'));
// });

var routes = require('./api/routes/contactListRoutes');
routes(app);


app.listen(port);

console.log('contact list api on ' + port);