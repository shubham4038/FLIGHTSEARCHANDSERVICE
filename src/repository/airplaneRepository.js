const { Airplane } = require('../models/index');

class AirplaneRepository {
    async createAirplane({model_number,capacity}){
        try {
            const airplane = await Airplane.create({model_number,capacity})
            return airplane
        } catch (error) {
            error
        }
    }

    async deleteAirplane(airplane_id){
        try {
            const airplane = await Airplane.destroy({
                where : {
                    id:airplane_id
                }
            })
        } catch (error) {
            throw(error);
        }
    }

    async updateAirplane(airplane_id,data){
        try {
            const airplane = await Airplane.update(data,{
                where:{
                    id:airplane_id
                }
            })
            return airplane;
        } catch (error) {
            
        }
    }

    async getAirplane(airplane_id){
        try {
            console.log("Hi")
            const airplane = await Airplane.findByPk(airplane_id);
            return airplane;
            
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = AirplaneRepository;