var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{res.send("In Index Backend Router");});

module.exports = router;