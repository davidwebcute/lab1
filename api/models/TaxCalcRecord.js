var mongoose = require('mongoose');

var TaxCalcRecordSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: true
  },
  financial_year: String,
  annual_income: Number,
  super_rate: Number,
  is_include_super: Boolean,
  superannuation: Number,
  gross_amount: Number,
  gross_super_amount: Number,
  tax_amount: Number,
  net_amount: Number,
  net_super_amount: Number,
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TaxCalcRecord', TaxCalcRecordSchema);