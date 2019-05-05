
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var Promise = require('bluebird');
  var db = require('../config');

  var UserSchema = new Schema({
    id:  Number,
    user_name: String,
    password:   String,
    timestamps: Boolean
  });

  var User = mongoose.model('users', UserSchema);

// User.method.initialize = function () {
//   this.on('creating', this.hashPassword);
// }

// User.method.comparePassword = function (attemptedPassword, callback) {
//   bcrypt.compare(attemptedPassword, this.get('password'), function (err, isMatch) {
//     callback(isMatch);
//   });
// }

// User.method.hashPassword = function () {
//   var cipher = Promise.promisify(bcrypt.hash);
//   return cipher(this.get('password'), null, null).bind(this)
//     .then(function (hash) {
//       this.set('password', hash);
//     });
// }



// var db = require('../config');
// var bcrypt = require('bcrypt-nodejs');
// var Promise = require('bluebird');

// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function () {
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function (attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function (err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function () {
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function (hash) {
//         this.set('password', hash);
//       });
//   }
// });

 module.exports = User;
