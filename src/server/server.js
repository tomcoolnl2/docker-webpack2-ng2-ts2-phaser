var express = require('express');
var mongoose = require('mongoose');
var app = express();
var settings = require('./settings/settings');

mongoose.connect(settings.URL)

var db = mongoose.connection;
db.on('error', function (err) {
	console.log(err)
})

db.once('open', function () {
	console.log('opened')
})


var BlogPostSchema = require('./schema/blogpost.schema')(mongoose.Schema);
var PostModel = mongoose.model('BlogPost', BlogPostSchema)

var BlogPostModel = new PostModel({
	title: 'TEST',
	body: "Shiny",
	date: Date.now()
});

BlogPostModel.save()

app.get('/', function (req, res) {
	BlogPostModel.find(function (err, blogPosts) {
		if (err) return console.error(err);
		res.json(blogPosts)
	});

})

app.listen(settings.PORT);