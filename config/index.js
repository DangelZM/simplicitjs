var path = require('path');
var nconf = require('nconf');

require('dotenv').load();

nconf.use('memory');
nconf
    .argv()
    .env()
    .file({ file: path.join(__dirname, 'environments') + '/' + nconf.get('NODE_ENV') + '.json' });

nconf.set('appDir', path.join(__dirname, '../app'));
nconf.set('modelsDir', path.join(__dirname, '../app/models'));
//nconf.set('bowerComponentsPath', path.join(__dirname, '../bower_components/'));

module.exports = nconf;
