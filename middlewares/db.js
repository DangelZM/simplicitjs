module.exports = function (config) {
  var mongoose = require('mongoose');
  var conn = mongoose.connection;

  conn.on('connected', function () {
    console.log('Mongoose connected to ' + config.get('db:url'));
  });

  conn.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
  });

  conn.on('disconnected', function () {
    console.log('Mongoose disconnected');
  });

  mongoose.connect(config.get('db:url'));

  process.on('SIGINT', function() {
    conn.close(function () {
      console.log('Mongoose disconnected through app termination');
      process.exit(0);
    });
  });

  return {
    connection: conn
  }

};