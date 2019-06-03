
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
	res.render('moshi_view');
});

module.exports = router;