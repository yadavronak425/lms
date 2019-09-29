var express = require('express');
var router = express.Router();

var frontendRoutes = require('./frontendRoutes.js');
var backendRoutes = require('./backendRoutes.js');
router.use('/',frontendRoutes);
router.use('/backend',backendRoutes);

module.exports = router;