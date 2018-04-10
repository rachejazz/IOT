// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var digitalSchema = new mongoose.Schema({
     Sensortype : String,
     SensorId  : Number,
     Status  : Number,
     DateTime  : String
     
});

module.exports = restful.model('digischema', digitalSchema);

