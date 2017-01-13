let express = require('express');
let mongoose = require('mongoose');
let settings = require('./settings/settings');
let app = express();
let ContestantModelFromSchema = require('./model/contestant.model')(mongoose);

let ContestantModel = new ContestantModelFromSchema({
	title: 'TEST',
	body: "blah",
	date: Date.now()
});

mongoose.connect(settings.URL);
ContestantModel.save();

app.get('/', (request, result) => {
	ContestantModelFromSchema.find((error, contestants) => error 
									? console.error(error) 
									: result.json(contestants));
});

app.listen(settings.PORT);