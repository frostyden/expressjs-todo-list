const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//STATIC ROUTES
app.use(express.static('public_files'));

//ROUTES
const loginRoute = require('./routes/login.js');
const homepageRoute = require('./routes/homepage.js');
const moshiRoute = require('./routes/moshi.js');

//PUG
app.set('view engine', 'pug');
app.set('views', './views');

//ROUTE USERS
app.use('/login', loginRoute);
app.use('/homepage', homepageRoute);
app.use('/moshi', moshiRoute);

//app.use('/moshi', express.static('public_files'));
//app.use(express.static('public_files'));

app.listen(port, () => console.log(`Listening in port ${port}`));