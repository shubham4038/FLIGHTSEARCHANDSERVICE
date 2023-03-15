const {AirplaneRepository} = require('../repository/index');

class AirplaneService{
    constructor(){
        this.AirplaneRepository= new AirplaneRepository();
    }

    async createAirplane(data){
        try {
            const airplane = await this.AirplaneRepository.createAirplane(data);
            return airplane
        } catch (error) {
            console.log("Error happened at service layer")
        }
    }

    async deleteAirplane(airplane_id){
        try {
            const airplane = await this.AirplaneRepository.deleteAirplane(airplane_id)
            return airplane
        } catch (error) {
            console.log("Error happened at service layer")
        }
    }

    async updateAirplane(airplane_id,data){
        try {
            const airplane = await this.AirplaneRepository.updateAirplane(airplane_id,data)
            return airplane;
        } catch (error) {
            console.log("Error happened at servoice layer");
        }
    }

    async getAirplane(airplane_id){
        try {
            const airplane = await this.AirplaneRepository.getAirplane(airplane_id);
            return airplane
        } catch (error) {
            console.log("Error happened at servoice layer");
        }
    }
}

module.exports = AirplaneService;