
const express = require('express');
const router = express.Router();

// All routes begin with /login/...
router.get('/', function (req, res) {
	res.render('login');
});

router.post('/', function (req, res) {
	console.log(req.body);
	res.send(req.body);
});

module.exports = router;