// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema

var analougeSchema = new mongoose.Schema({
      Sensortype  : String,
      SensorId  : Number,
      Input_Range  : Number,
      Output_Range  : Number,
      Sensitivity : Number
});

module.exports = restful.model('anaschema', analougeSchema);    