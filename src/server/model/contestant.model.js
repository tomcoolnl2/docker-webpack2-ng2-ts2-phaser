
module.exports = mongoose => mongoose.model('Contestant', new mongoose.Schema({
	_id: Number,
	name: String,
	emailAddress: String,
	highscores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Highscore' }]
}));