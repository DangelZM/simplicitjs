var mongoose = require('mongoose');
var crypto = require('crypto');

var userShema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  salt: { type: String, required: true },
  hashedPassword: { type: String, required: true }
});

userShema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
  //more secure - return crypto.pbkdf2Sync(password, this.salt, 10000, 512);
};

userShema.virtual('password')
  .set(function(password) {
    this._plainPassword = password;
    this.salt = crypto.randomBytes(32).toString('base64');
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() { return this._plainPassword; });


userShema.methods.checkPassword = function(password) {
  console.log(this._plainPassword);
  return this.encryptPassword(password) === this.hashedPassword;
};

module.exports = mongoose.model('User', userShema);


