var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_PASSWORD',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//Tax Calc related api
var TaxCalcRecord = require('../models/TaxCalcRecord');
/* GET ALL TaxCalcRecords */
router.get('/taxcalcrecords',  auth, function(req, res, next) {
  TaxCalcRecord.find(function (err, records) {
    if (err) return next(err);
    res.json(records);
  });
});

/* GET ALL TaxCalcRecords by email */
router.get('/taxcalcrecordsbyemail/:email', auth, function(req, res, next) {
  TaxCalcRecord.find({'user_email': req.params.email},function (err, records) {
    if (err) return next(err);
    res.json(records);
  });
});

/* GET SINGLE TaxCalcRecord BY ID */
router.get('/taxcalcrecord/:id', auth, function(req, res, next) {
  TaxCalcRecord.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE TaxCalcRecord */
router.post('/taxcalcrecord', auth, function(req, res, next) {
  TaxCalcRecord.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE TaxCalcRecord */
router.put('/taxcalcrecord/:id', auth, function(req, res, next) {
  TaxCalcRecord.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE TaxCalcRecord */
router.delete('/taxcalcrecord/:id', auth,  function(req, res, next) {
  TaxCalcRecord.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
