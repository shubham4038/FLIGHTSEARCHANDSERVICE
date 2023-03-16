const {Flight,Airplane} = require('../models/index')
const {Op} = require('sequelize');


class FlightRepository{

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId= data.arrivalAirportId
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId
        }
        if(data.maxPrice && data.minPrice){
            Object.assign(filter,{[Op.and]:
            [
                {price: {[Op.gte]: data.minPrice}},
                {price: {[Op.lte]: data.maxPrice}}
            ]})
            return filter;
        } 
        if(data.minPrice) {
        Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
         Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
        }
        return filter;
    }
    async createFlight(data){
        try {
            const flight = await Flight.create(data)
            return flight
        } catch (error) {
            throw(error)
        }
    }

    async getAllFlights(data) {
        try {
            const filterObject = this.#createFilter(data);
            console.log(filterObject);
            const flight = await Flight.findAll({
                where: filterObject
            });
            console.log(flight)
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;