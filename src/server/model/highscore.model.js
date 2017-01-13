
module.exports = mongoose => mongoose.model('Highscore', new mongoose.Schema({
	_contestant: { type: Number, ref: 'Contestant' },
	highScore: Number
}));