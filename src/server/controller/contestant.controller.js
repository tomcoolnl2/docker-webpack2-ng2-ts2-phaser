
let mongoose = require('mongoose');
let Highscore = require('../model/highscore.model')(mongoose);
let Contestant = require('../model/contestant.model')(mongoose);

exports.test = () => {

	var aaron = new Contestant({ _id: 0, name: 'Aaron', emailAdress: 'test@test.com' });

	aaron.save(function (err) {
		if (err) return;

		var story1 = new Highscore({
			title: "Once upon a timex.",
			_contestant: aaron._id
		});
	});
};

exports.find = () => {
	Contestant.find((error, contestants) => error
			? console.error(error)
			: result.json(contestants));
};
