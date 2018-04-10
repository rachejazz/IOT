// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Analog = require('../models/analog');
var Digital = require('../models/digital');

// Routes
Analog.methods(['get', 'put', 'post', 'delete']);
Digital.methods(['get', 'put', 'post', 'delete']);
Digital.register(router, '/digischema');
Analog.register(router, '/anaschema');


// Return router
module.exports = router;