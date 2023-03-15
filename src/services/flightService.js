const {FlightRepository,AirplaneRepository} = require('../repository/index');

class FlightService{
    constructor(){
        this.FlightRepository = new FlightRepository();
        this.AirplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            console.log(data.airplaneId)
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId)
            console.log(airplane);
            const flight = await this.FlightRepository.createFlight({...data, totalSeats:airplane.capacity})
            return flight;
        } catch (error) {
            console.log("error at service layer")
        }
    }
}

module.exports = FlightService;