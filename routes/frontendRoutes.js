var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{res.render("index.html");});
router.get('/signup',(req,res)=>{res.render("signup.html");});
router.post('/signup',(req,res)=>{
    console.log('body ',body.email);
    
    res.render("index.html");});


module.exports = router;