
const express = require('express');
const router = express.Router();
const pg = require('../config/db.js');

// All routes begin with /login/...
router.get('/', function (req, res) {
	res.render('login');
});

router.post('/', (req, res) => {
	if (!req.body.username || !req.body.password) {
		res.status(400).send('Invalid username/password pair.'); // Bad request. Empty field(s)
	} else {
		pg.select('u_id', 'u_username', 'password')
			.from('tdlist_user')
			.where('u_username', '=', pg.raw('?', [req.body.username]))
			.andWhere('password', '=', pg.raw('?', [req.body.password]))
			.unionAll(pg.raw('SELECT NULL, NULL, NULL'))
			.then(data => {
				if (data[0].u_username !== req.body.username) {
					console.log('DATA:', data);
					res.status(204).send('There is no such user.'); // No Content. The server successfully processed the request and is not returning any content.
				} else if (data[0].password !== req.body.password) {
					console.log('DATA:', data[0].password);
					res.status(400).send('Password is wrong.'); // Bad request for now
				} else {
					res.status(200).send('Logged in.'); // Success
				}
			})
			.catch(error => {
				console.error('ERROR: ', error);
				res.status(400).send('Fail.');
			});
	}
});


module.exports = router;