const express = require('express');
const cityController = require('../controllers/cityController');

const router = express.Router();

router.route('/city').post(cityController.Create);
router.route('/city/:id').delete(cityController.destroy);
router.route('/city/:id').patch(cityController.updateCity);
router.route('/city/:id').get(cityController.getCity);
router.route('/city').get(cityController.getAllCities);

module.exports = router;