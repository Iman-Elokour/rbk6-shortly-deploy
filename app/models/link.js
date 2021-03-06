var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var linkSchema = new Schema({
  id:  Number,
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: String,
  timestamps: Boolean
});
var Link = mongoose.model('urls', linkSchema);

// Link.method.initialize = function () {
//   this.on('creating', function (model, attrs, options) {
//     var shasum = crypto.createHash('sha1');
//     shasum.update(model.get('url'));
//     model.set('code', shasum.digest('hex').slice(0, 5));
//   });
// }

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function () {
//     this.on('creating', function (model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

