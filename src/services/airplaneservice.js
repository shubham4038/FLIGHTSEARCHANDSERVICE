const AirplaneRepository = require('../repository/airplaneRepository');

class AirplaneService{
    constructor(){
        this.airplanerepository= new AirplaneRepository();
    }

    async createAirplane(data){
        try {
            const airplane = await this.airplanerepository.createAirplane(data);
            return airplane
        } catch (error) {
            console.log("Error happened at service layer")
        }
    }

    async deleteAirplane(airplane_id){
        try {
            const airplane = await this.airplanerepository.deleteAirplane(airplane_id)
            return airplane
        } catch (error) {
            console.log("Error happened at service layer")
        }
    }

    async updateAirplane(airplane_id,data){
        try {
            const airplane = await this.airplanerepository.updateAirplane(airplane_id,data)
            return airplane;
        } catch (error) {
            console.log("Error happened at servoice layer");
        }
    }

    async getAirplane(airplane_id){
        try {
            const airplane = await this.airplanerepository.getairplane(airplane_id);
            return airplane
        } catch (error) {
            
        }
    }
}

module.exports = AirplaneService;