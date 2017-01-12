var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost:27017/ng-game')

var db = mongoose.connection;
db.on('error', function (err) {
	console.log(err)
})

db.once('open', function () {
	console.log('opened')
})


var BlogPostSchema = require('./schema/blogpost.schema')(mongoose.Schema);
var PostModel = mongoose.model('BlogPost', BlogPostSchema)

var pm = new PostModel({
	title: 'TEST',
	body: "Shiny",
	date: new Date()
});

pm.save()

app.get('/', function (req, res) {
	PostModel.find(function (err, kittens) {
		if (err) return console.error(err);
		console.log(kittens);
		res.json(kittens)
	});

})

app.listen(3000)