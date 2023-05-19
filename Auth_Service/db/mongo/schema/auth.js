var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  user_id: {
    type: String, default: function genUUID() {
      return uuid.v1()
    }
  },
  username: String,
  password: String,
  created_at: Date,
  updated_at: Date
}, { versionKey: false });

userSchema.statics.findOneOrCreate = function (condition, doc, callback) {
  const self = this;
  self.findOne(condition, '-_id', (err, result) => {
    return result
      ? callback(err, { created: false, ...result.toObject() })
      : self.create(doc, (err, result) => {
        return callback(err, { created: true, ...result.toObject() });
      });
  });
};

module.exports = mongoose.model('User', userSchema);