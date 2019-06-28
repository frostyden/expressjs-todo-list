const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const cookieParser = require('cookie-parser');
//const session = require('express-session');
const port = process.env.PORT || 8080;

// DB
// const promise = require('bluebird');
// const initOptions = {
// 	promiseLib: promise // overriding the default (ES6 Promise);
// };
// const pgp = require('pg-promise')(initOptions);
// const db = pgp('postgres://todouser:abc123!@localhost:5432/tododb');
//const dbRequire = require('./config/db.js');

//ROUTES
//const loginRoute = require('./routes/login.js');
//const homepageRoute = require('./routes/homepage.js');
//const moshiRoute = require('./routes/moshi.js');
const routes = require('./routes.js');

//PUG
app.set('view engine', 'pug');
app.set('views', './views');

//PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());

//SESSION
// app.use(session({
// 	secret: 'Shh, its a secret!',
// 	saveUninitialized: 'true',
// 	resave: 'true'
// }));

//STATIC ROUTES
//app.use(express.static('public_files'));
//app.use('/file', express.static('public_files'));
app.use('/file', express.static(path.join(__dirname, 'public_files')));

//ROUTE USERS
app.use('/login', routes.loginRoute);
app.use('/homepage', routes.homepageRoute);
app.use('/moshi', routes.moshiRoute);
/**
// app.get('/test', function (req, res) {
// 	dbRequire.db.any('SELECT * FROM tdlist_user where u_id = $1', 0)
// 		.then(function (data) {
// 			// success;
// 			console.log('DATA:', data);
// 			res.send(data);
// 		})
// 		.catch(function (error) {
// 			// error;
// 			console.log('ERROR:', error);
// 		})
// 		.finally(db.$pool.end);

// 	//db.$pool.end();
// 	//pgp.end();
// 	//res.send(data);
// });

//Testing cookie
// app.get('/cookie', function (req, res) {
// 	res.cookie('name', 'express').send('cookie set'); //Sets name = express
// });

//Testing session and cookie
// app.get('/session', function (req, res) {
// 	if (req.session.page_views) {
// 		req.session.page_views++;
// 		res.send('You visited this page ' + req.session.page_views + ' times');
// 	} else {
// 		req.session.page_views = 1;
// 		res.send('Welcome to this page for the first time!');
// 	}
// });
**/
app.listen(port, () => console.log(`Listening in port ${port}`));