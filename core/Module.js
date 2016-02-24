var path = require('path');
var express = require('express');
var hbs = require('hbs');

var ModuleClass = function(dir){
    this.instance = express();
    this.dir = dir;
    this.config = require(path.join(dir, 'config'));
    this.instance.disable('x-powered-by');
};

ModuleClass.prototype.static = function (url, dir) {
    this.instance.use(url, express.static(dir))
};

ModuleClass.prototype.init = function () {
    var config = this.config;

    switch(config.type) {
        case 'api': runAPIModule(this, config); break;
        case 'spa': runSPAModule(this, config); break;
        default :   runStandardModule(this, config); break;
    }
};

ModuleClass.prototype.getInstance = function () {
    return this.instance;
};

function runStandardModule(module, config) {
    if(config.views) enableViews(module, config);
    if(config.controllers) {
        var controllers = config.controllers;
        Object.keys(controllers).forEach(function(key) {
            module.instance.use(key, require(path.join(module.dir, 'controllers', controllers[key])));
        });
    }
}

function runSPAModule(module, config) {
    var instance = module.instance;
    instance.use('/', express.static(path.join(module.dir, 'public')));
    instance.get('/*', function (req, res) {
        res.sendFile(path.join(module.dir, 'public', 'index.html'));
    });
}

function runAPIModule(module, config) {
    if(config.controllers) {
        var controllers = config.controllers;
        Object.keys(controllers).forEach(function(key) {
            module.instance.use(key, require(path.join(module.dir, 'controllers', controllers[key])));
        });
    }
    module.instance.use('*', function(req, res){
        res.sendStatus(404);
    });
}

function enableViews(module, config){
    var instance = module.instance;
    var themePath = path.join(module.dir, 'views/theme', config.theme);

    var template = hbs.create();
    template.registerPartials(path.join(themePath, 'partials'));

    instance.engine('hbs', template.__express);
    instance.set('views', themePath);
    instance.use('/assets', express.static(path.join(themePath, 'assets')));
}

module.exports = ModuleClass;