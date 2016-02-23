var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var config = require('nconf');

module.exports = function(app){
    require('./db')(config);

    app.disable('x-powered-by');

    app.set('port', config.get('NODE_PORT'));
    app.set('views', path.join('core', 'views'));
    app.set('view engine', 'hbs');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    if(config.get('DEBUG') === true) app.use(logger('dev'));

    app.use(function(req, res, next){
        next();
    });
};
