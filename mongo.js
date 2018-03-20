var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/abc');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    Sensortype: String,
    SensorId: String,
    Status : Number,
    DateTime : String
};
// create model if not exists.
module.exports = mongoose.model('Sensors',userSchema);