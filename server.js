// server.js

// modules =================================================
var express        = require('express');
var app            = module.exports = express();
var bodyParser     = require('body-parser');
// var router = require('./router');
// var swig           = require('swig');

// configuration ===========================================
    
//app.engine('html', cons.swig);
app.set('view engine', 'html');
// app.set('views', __dirname + '/partials');

var env = process.env.ENV || 'local';

// set our port
var port = process.env.PORT || 8080; 


// get all data/stuff off the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// set the static files location /public/img will be /img for users
// app.use('/canvas', express.static(__dirname + '/canvas/dist'));

app.use(express.static(__dirname + '/public'));

// app.use('/api', router);

// get initial route
 app.get('*', function(req, res) {
    // load our public/index.html file
    res.sendfile('./public/index.html'); 
  });

// start app =============================================
app.listen(port, function() {
  // shoutout
  console.log('Listening on port ', port, '...');
});
