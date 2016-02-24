var path = require('path');
var config = require('nconf');
var ControllerClass = require(path.join(config.get('CORE_DIR'), 'Controller'));

var Controller = new ControllerClass();

Controller.post('/authorize', function(req, res){
    res.send({
        token: "testtoken"
    });
});

module.exports = Controller;