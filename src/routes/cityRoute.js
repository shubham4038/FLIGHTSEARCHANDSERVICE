const express = require('express');
const cityController = require('../controllers/cityController');
const flightController = require('../controllers/flightController')
const airplaneController = require('../controllers/airplaneController');

const router = express.Router();

router.route('/city').post(cityController.Create).get(cityController.getAllCities);
router.route('/city/:id').delete(cityController.destroy).patch(cityController.updateCity).get(cityController.getCity);


router.route('/flights').post(flightController.createFlight).get(flightController.getAllflights)
router.route('/airplane/:id').get(airplaneController.getAirplane)



module.exports = router;