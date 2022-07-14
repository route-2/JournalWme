const express = require('express');
const  {registerUser } = require('../controllers/userControllers');
const router = express.Router();

// creating the first route which is the apis endpoint and we are
// storing the data in the backend so we use POST request and pass the controller as an argument


router.route('/').post(registerUser);

module.exports= router;