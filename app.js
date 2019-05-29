const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//ROUTES
const loginRoute = require('./routes/login.js');
const homepageRoute = require('./routes/homepage.js');

//PUG
app.set('view engine', 'pug');
app.set('views','./views');

//ROUTE USERS
//app.use('/login', loginRoute);
app.use('/homepage', homepageRoute);

//Serve static files
//app.use(express.static('public'));

//app.get('/first_template', function(req, res){
//    res.render('first');
// });

app.listen(port, () => console.log(`Listening in port ${port}`));