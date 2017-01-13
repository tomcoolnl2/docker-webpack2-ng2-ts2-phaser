
module.exports = Mongoose => Mongoose.model('Contestant', new Mongoose.Schema({
	// __id: Mongoose.Schema.ObjectId,
	title: String,
	body: String,
	date: Date
}));