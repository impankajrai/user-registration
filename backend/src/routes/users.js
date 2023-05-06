const express = require('express')
const router = express.Router()
const { registration, getData } = require('../controller/userController');

//user  route--------------------------------------
router.route('/registration').post(registration);
router.route('/get').get(getData);



module.exports = router