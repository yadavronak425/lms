var express = require('express');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var indexRoutes = require('./routes/indexRoutes.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library-management-system',{useUnifiedTopology: true,useNewUrlParser: true})
.then(()=>{console.log('DB Connected');})
.catch(error => handleError(error));

var app = express();
const PORT = process.env.port || 3000;
app.use('/',indexRoutes);

nunjucks.configure('./app/views',{
    autoescape: true,
    express: app
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ 
    extended: true
}));

app.listen(PORT, ()=>{console.log("Listening on PORT No 3000")})