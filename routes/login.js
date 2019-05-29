const express = require('express');
const router = express.Router();

// All routes begin with /login/...
router.get('/', function(req, res){
    res.send('GET route on login');
 });

module.exports = router;