var mailchimpApiKey = "bfc757af8b9940bb7335d136d1082312-us11";
var mailchimpListId = "e5d59a2fae";


// server.js (Express 4.0)
var express        = require('express');
var bodyParser     = require('body-parser');
var morgan         = require('morgan');
var http           = require('http');
var app            = express();
var mcapi          = require('mailchimp-api/mailchimp');

// See Mailchimp Node Module - https://github.com/gomfunkel/node-mailchimp
mc = new mcapi.Mailchimp(mailchimpApiKey);


app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                     // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())    // parse application/json
var port = process.env.PORT || 3000;


app.listen(port);
console.log('Magic happens on port 8080');          // shoutout to the user



app.route('/submit-email')
.get(function(req, res, next) {
    console.log('get email: ' + req.param.email);
    console.log('get email: ' + req.body);    })
.post(function(req, res, next) {
    var email = req.body['userEmail'];
    console.log('post email:' + req.body['userEmail']);
    mc.lists.subscribe({id: mailchimpListId, email:{email:req.body['userEmail']},double_optin: false,send_welcome:true}, function(data) {
        console.log( 'User subscribed successfully!');
        res.json(req.body);
    },function(error) {
        console.log("ec" + error.code +"ee" + error.error);
        res.json(req.body);
        if (error.error) {
            console.log(error.error);}
        else {
            console.log("ec" + error.code +"ee" + error.error);
        }
    }
    );
});
