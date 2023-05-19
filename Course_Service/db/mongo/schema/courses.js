var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var coursesSchema = new Schema({
  course_id: {
    type: String, default: function genUUID() {
      return uuid.v1()
    }
  },
  name: String,
  duration: String,
  fees: String,
  created_at: Date,
  updated_at: Date
}, { versionKey: false });

coursesSchema.statics.findOneOrCreate = function (condition, doc, callback) {
  const self = this;
  self.findOne(condition, '-_id', (err, result) => {
    return result
      ? callback(err, { created: false, ...result.toObject() })
      : self.create(doc, (err, result) => {
        return callback(err, { created: true, ...result.toObject() });
      });
  });
};

module.exports = mongoose.model('Course', coursesSchema);