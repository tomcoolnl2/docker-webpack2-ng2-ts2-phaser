let express = require('express');
let mongoose = require('mongoose');
let settings = require('./settings/settings');
let app = express();

mongoose.Promise = global.Promise;
mongoose.connect(settings.URL);

// let ContestantSchema = require('./model/contestant.model')(mongoose.Schema);
// let ContestantController = require('./controller/contestant.controller')();

// let ContestantModel = new ContestantModelFromSchema({
// 	title: 'TEST',
// 	body: "blah",
// 	date: Date.now()
// });

let Schema = mongoose.Schema;

var ContestantSchema = new Schema({
	_id: Number,
	name: String,
	age: Number,
	highscores: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var HighscoreSchema = new Schema({
	_creator: { type: Number, ref: 'Contestant' },
	highScore: Number
});

var Highscore = mongoose.model('Story', HighscoreSchema);
var Contestant = mongoose.model('Contestant', ContestantSchema);



var aaron = new Contestant({ _id: 0, name: 'Aaron', age: 100 });

aaron.save(function (err) {
	if (err) return;

	var story1 = new Highscore({
		title: "Once upon a timex.",
		_creator: aaron._id
	});

	story1.save();
});

// ContestantModel.save();

app.get('/', (request, result) => {
	ContestantModelFromSchema.find((error, contestants) => error
		? console.error(error)
		: result.json(contestants));
});

app.listen(settings.PORT);