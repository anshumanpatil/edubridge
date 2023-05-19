var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var trainerSchema = new Schema({
  trainer_id: {
    type: String, default: function genUUID() {
      return uuid.v1()
    }
  },
  name: String,
  middleName: String,
  surName: String,
  mobile: String,
  created_at: Date,
  updated_at: Date
}, { versionKey: false });

trainerSchema.statics.findOneOrCreate = function (condition, doc, callback) {
  const self = this;
  self.findOne(condition, '-_id', (err, result) => {
    return result
      ? callback(err, { created: false, ...result.toObject() })
      : self.create(doc, (err, result) => {
        return callback(err, { created: true, ...result.toObject() });
      });
  });
};

module.exports = mongoose.model('Trainer', trainerSchema);