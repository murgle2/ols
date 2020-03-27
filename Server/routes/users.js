const express = require('express'),
	router = express.Router();

/* GET users listing. */
router.route('/')
	.get((req, res) => {
		res.send('in users')
	});

module.exports = router;
