var path = require('path');
var config = require('nconf');
var ControllerClass = require(path.join(config.get('CORE_DIR'), 'Controller'));

var Controller = new ControllerClass();

Controller.get('/', function(req, res){
    res.render('pages/contacts', {
        activePage: "contacts",
        title: "Contacts page"
    });
});

Controller.post('/', function(req, res){
    res.render('pages/thankyou', {
        email: req.body.email,
        message: req.body.message
    });
});

module.exports = Controller;