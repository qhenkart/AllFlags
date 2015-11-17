// server.js

// modules =================================================
var express        = require('express');
var app            = module.exports = express();
var bodyParser     = require('body-parser');

// configuration ===========================================
    
app.set('view engine', 'html');
// app.set('views', __dirname + '/partials');

var env = process.env.ENV || 'local';

// set our port
var port = process.env.PORT || 8080; 

app.use(express.static(__dirname + '/public'));

// get initial route
 // app.get('*', function(req, res) {
 //    // load our public/index.html file
 //    res.sendFile('index.html', { root: __dirname }); 
 //  });

// start app =============================================
app.listen(port, function() {
  // shoutout
  console.log('Listening on port ', port, '...');
});
