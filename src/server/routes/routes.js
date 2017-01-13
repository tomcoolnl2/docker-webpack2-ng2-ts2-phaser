
var express = require('express');
var router = express.Router();
let ContestantController = require('../controller/contestant.controller');

router.get('/', (request, result) => {
	return ContestantController.find(result);
});

module.exports = router;
