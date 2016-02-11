var express = require('express');
var submodule = express();
submodule.disable('x-powered-by');

submodule.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

module.exports = submodule;
