const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const port = process.env.PORT || 8080;

//DB
const pgp = require('pg-promise')(/* options */);
const db = pgp('postgres://todouser:abc123!@localhost:5432/tododb');


//ROUTES
const loginRoute = require('./routes/login.js');
const homepageRoute = require('./routes/homepage.js');
const moshiRoute = require('./routes/moshi.js');

//PUG
app.set('view engine', 'pug');
app.set('views', './views');

//PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//STATIC ROUTES
//app.use(express.static('public_files'));
//app.use('/file', express.static('public_files'));
app.use('/file', express.static(path.join(__dirname, 'public_files')));

//ROUTE USERS
app.use('/login', loginRoute);
app.use('/homepage', homepageRoute);
app.use('/moshi', moshiRoute);

app.get('/test', function (req, res) {
	try {
		const data = db.any('SELECT * FROM playground WHERE equip_id = $1', 1);
		// success
		console.log(data+' SOME DATA');
		res.send(data);
	}
	catch (e) {
		// error
		console.log(e);
	}
	//db.$pool.end();
	//pgp.end();
	//res.send(data);
 });

app.listen(port, () => console.log(`Listening in port ${port}`));