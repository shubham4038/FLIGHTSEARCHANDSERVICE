const {FlightRepository,AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService{
    constructor(){
        this.FlightRepository = new FlightRepository();
        this.AirplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.departureTime,data.arrivalTime)){
                throw {error : "Arrival time should be graeter than departure time"}
            }
            console.log("Hi")
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.FlightRepository.createFlight({...data, totalSeats:airplane.capacity})
            return flight;
        } catch (error) {
            throw error
        }
    }

    async getAllflights(data){
        try {
            console.log("Hi")
            const flight = await this.FlightRepository.getAllFlights(data);
            console.log(flight)
            return flight
        } catch (error) {
            throw error;
        }
       

    }
}

module.exports = FlightService;