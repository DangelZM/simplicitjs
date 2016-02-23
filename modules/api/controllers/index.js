var path = require('path');
var config = require('nconf');
var ControllerClass = require(path.join(config.get('CORE_DIR'), 'Controller'));

var Controller = new ControllerClass();

Controller.get('/', function(req, res){
    res.send({
        status: "ok"
    });
});

module.exports = Controller;