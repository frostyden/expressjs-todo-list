//DB
const promise = require('bluebird');
const initOptions = {
	promiseLib: promise // overriding the default (ES6 Promise);
};
const pgp = require('pg-promise')(initOptions);
const db = pgp('postgres://todouser:abc123!@localhost:5432/tododb');

module.exports = {
	pgp,
	db
};