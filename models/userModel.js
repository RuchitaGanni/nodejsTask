var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });
var UserSchema = new Schema(
{
        name: {type: String},
        mobile: {type: String, unique:true},
        email: {type: String},
        address: {street: {type: String},
            locality: {type: String}, 
            city: {type: String},
            state: {type: String},
            pincode: {type: String}, 
            coordinates:{type: pointSchema
            }
        }
},
{ timestamps: true }
  
);

module.exports = mongoose.model('User',UserSchema );