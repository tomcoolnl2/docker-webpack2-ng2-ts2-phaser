let express = require('express');
let mongoose = require('mongoose');
let settings = require('./settings/settings');
let routes = require('./routes/routes');
let app = express();

let ContestantController = require('./controller/contestant.controller');

mongoose.Promise = global.Promise;
mongoose.connect(settings.URL);

// ContestantController.test();

app.use('/', routes);

app.listen(settings.PORT);