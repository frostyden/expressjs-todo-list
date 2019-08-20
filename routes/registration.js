
const express = require('express');
const router = express.Router();
const pg = require('../config/db.js');

// All routes begin with /api/registration/...
router.get('/', (req, res) => { // NOTE: Remove all pug renders from api
	res.render('registration');
});

router.post('/', (req, res) => {
	if (!req.body.username || !req.body.password) {
		res.status(400).send('Invalid username/password pair.'); // Bad request. Empty field(s)
	} else {
		// pg.select('username')
		// 	.from('tl_user')
		// 	.where('username', '=', pg.raw('?', [req.body.username]))
		// 	.unionAll(pg.raw('SELECT NULL, NULL'))
		// 	.then(data => {
		// 		if (data[0].username !== 'fgbfgb') { // 
		// 			console.error('DATA: ', data);
		// 			return res.status(400).send('This username already exists.');
		// 		} else {
		pg.insert([{ username: req.body.username, password: req.body.password }], ['uid']).into('tl_user')
			.then(result => {
				console.log('RESULT: ', result);
				res.status(200).send('Succesfully registered.');
			})
			.catch(error => {
				console.error('ERROR: ', error);
				res.status(400).send(error);
			});
		//}
		// })
		// .catch(error => {
		// 	console.error('ERROR: ', error);
		// 	res.status(400).send('Fail.');
		// });
	}
});

module.exports = router;