const express = require('express');
const cityController = require('../controllers/cityController');
const flightController = require('../controllers/flightController')
const airplaneController = require('../controllers/airplaneController');

const router = express.Router();

router.route('/city').post(cityController.Create);
router.route('/city/:id').delete(cityController.destroy);
router.route('/city/:id').patch(cityController.updateCity);
router.route('/city/:id').get(cityController.getCity);
router.route('/city').get(cityController.getAllCities);

router.route('/flights').post(flightController.createFlight)

router.route('/airplane/:id').get(airplaneController.getAirplane)



module.exports = router;