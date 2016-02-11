var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

module.exports = function(app){
    require('./db')(require('nconf'));

    if (app.get('env') == 'development') {
        app.use(logger('dev'));
    }

    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');

    app.use(function(req, res, next){
        next();
    });
};
