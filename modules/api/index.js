var path = require('path');
var config = require('nconf');
var ModuleClass = require(path.join(config.get('CORE_DIR'), 'Module'));
var cors = require('cors');

var Module = new ModuleClass(__dirname);
Module.getInstance().use(cors());

Module.init();
module.exports = Module.getInstance();