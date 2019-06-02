
const express = require('express');
const router = express.Router();

//router.use('/', express.static('public_files'));

router.get('/', function (req, res) {
	res.render('moshi_view');
});

//router.use(express.static('public_files'));

module.exports = router;