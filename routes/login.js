
const express = require('express');
const router = express.Router();

// All routes begin with /login/...
// router.get('/', function (req, res) {
// 	res.render('login');
// });

router.get('/', function (req, res) {
	db.any('SELECT * FROM tdlist_user where u_id = $1', ['0'])
		.then(function (data) {
			// success;
			console.log('DATA:', data);
			res.send(data);
		})
		.catch(function (error) {
			// error;
			console.log('ERROR:', error);
		})
		.finally(db.$pool.end);
	// console.log(req.body);
	// res.send(req.body);
});

module.exports = router;