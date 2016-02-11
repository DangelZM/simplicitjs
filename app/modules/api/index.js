var express = require('express');
var submodule = express();
submodule.disable('x-powered-by');

var cors = require('cors');
submodule.use(cors());

submodule.get('/', require('./controllers/index'));

module.exports = submodule;