var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/TaxCalculator', 
{ useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection TaxCalculator mongo db succesful'))
  .catch((err) => console.error(err));

// BRING IN SCHEMAS & MODELS
require('./users');
require('./TaxCalcRecord');