var path = require('path');
var config = require('nconf');
var ModuleClass = require(path.join(config.get('CORE_DIR'), 'Module'));

var Module = new ModuleClass(__dirname);

Module.init();
module.exports = Module.getInstance();