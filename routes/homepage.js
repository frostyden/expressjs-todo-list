
 const express = require('express');
 const router = express.Router();

 router.get('/', function(req, res){
    res.render('homepage');
 });
 router.get('/:userid', function(req, res){
    res.render('homepage');
 });
 
 module.exports = router;