const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

router
    .route('/login')
    .post(authController.login)
router
    .route('/register')
    .post(authController.register);

router.route('/trips')
router.get(tripsController.tripsList)
router.post(auth, tripsController.tripsAddTrip);

router.route('/trips/:tripCode')
router.get(tripsController.tripsFindCode)
router.put(auth, tripsController.tripsUpdateTrip);

module.exports = router;