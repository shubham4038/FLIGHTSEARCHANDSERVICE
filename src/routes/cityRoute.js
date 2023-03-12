const express = require('express');
const cityController = require('../controllers/cityController');

const router = express.Router();

router.route('/city').post(cityController.Create);

module.exports = router;