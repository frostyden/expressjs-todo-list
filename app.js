const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const cookieParser = require('cookie-parser');
//const session = require('express-session');
const routes = require('./routes.js');
const port = process.env.PORT || 8080;




//PUG
app.set('view engine', 'pug');
app.set('views', './views');

//PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());

//ROUTE USERS
app.use('/login', routes.loginRoute);
app.use('/homepage', routes.homepageRoute);
app.use('/moshi', routes.moshiRoute);
app.use('/registration', routes.sigInRoute);
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

app.listen(port, () => console.log(`Listening in port ${port}`));