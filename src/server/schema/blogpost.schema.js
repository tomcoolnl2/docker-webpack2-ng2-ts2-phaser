
module.exports = function(Schema) {
	
	return new Schema({
		author: Schema.ObjectId,
		title: String,
		body: String,
		date: Date
	});
}

