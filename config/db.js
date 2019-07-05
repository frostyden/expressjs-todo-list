//DB
const knex = require('knex')({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'todouser',
		port: 5432,
		password: 'abc123!',
		database: 'tododb'
	},
	pool: {
		min: 0,
		max: 1
	}
});

module.exports = knex;