
const express = require('express');
const router = express.Router();
const pg = require('../config/db.js');

// URL /api/homepage/...

// router.get('/', (req, res) => {
// 	res.send('homepage');
// });

router.get('/:id', (req, res) => {
	pg.select('status', 'description')
		.from('tl_task')
		.where('ownid', '=', pg.raw('?', req.params.id))
		.then(data => {
			res.render('homepage', {
				// username: req.params.username, 
				id: req.params.id,
				status: data[0].status, 
				description: data[0].description
			});
		})
		.catch(error => {
			console.error('ERROR: ', error);
			res.status(400).send('Fail.');
		});
});

module.exports = router;