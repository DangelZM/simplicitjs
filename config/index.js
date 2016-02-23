var path = require('path');
var nconf = require('nconf');

require('dotenv').load();

nconf.use('memory');
nconf
    .argv()
    .env()
    .file({ file: path.join(__dirname, 'environments') + '/' + nconf.get('NODE_ENV') + '.json' });

nconf.set('CORE_DIR', path.join(__dirname, '../core'));
nconf.set('MODELS_DIR', path.join(__dirname, '../models'));
nconf.set('BOWER_DIR', path.join(__dirname, '../bower_components/'));

module.exports = nconf;
