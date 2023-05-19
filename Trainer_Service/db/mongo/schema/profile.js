var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  _id: { type: String, default: function genUUID() {
      return uuid.v1()
  }},
  user_id: String,
  name: String,
  middleName: String,
  surName: String,
  mobile: String,
  phone: String,
  address: String,
  pincode: String,
  admin: Boolean,
  city: String,
  created_at: Date,
  updated_at: Date
}, { versionKey: false });

profileSchema.statics.findOneOrCreate = function (condition, doc, callback) {
  const self = this;
  self.findOne(condition, '-_id', (err, result) => {
    return result 
      ? callback(err, {created:false, ...result.toObject()})
      : self.create(doc, (err, result) => {
        return callback(err, {created:true, ...result.toObject()});
      });
  });
};

module.exports = mongoose.model('User_Profile', profileSchema);