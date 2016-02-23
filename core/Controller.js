var express = require('express');

var ControllerClass = function(){
    this.instance = express.Router();
    return this.instance;
};

module.exports = ControllerClass;