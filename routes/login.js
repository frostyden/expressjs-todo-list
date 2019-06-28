
const express = require('express');
const router = express.Router();
const dbRequire = require('../config/db.js');

// All routes begin with /login/...
router.get('/', function (req, res) {
	res.render('login');
});

router.post('/', function (req, res) {
	if (!req.body.username || !req.body.password) {
		res.status(400).send('Current username and password pair is incorrect.');
	} else {
		dbRequire.db.any('SELECT u_username, password FROM tdlist_user where u_username=$1 and password =$2', [req.body.username, req.body.password])
			.then(function (data) {
				// success;
				if ()
				console.log('DATA:', data);
				res.status(200).send(data);
			})
			.catch(function (error) {
				// error;
				console.log('ERROR:', error);
			});
	}
	// console.log(req.body);
	// res.send(req.body);
});

module.exports = router;