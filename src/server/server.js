let express = require('express');
let mongoose = require('mongoose');
let settings = require('./settings/settings');
let app = express();

let ContestantController = require('./controller/contestant.controller');

mongoose.Promise = global.Promise;
mongoose.connect(settings.URL);

ContestantController.test();

app.get('/', (request, result) => {
	ContestantController.find();
});

app.listen(settings.PORT);