const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){
        try {
            console.log(name);
            const city = await City.create({name})
            return city
        } catch (error) {
            throw(error)
        }

    }

    async deleteCity(cityid){
        try {
            const city = await City.destroy({
                where :{
                    id:cityid
                }
            })
            return city;
        } catch (error) {
            throw(error)
        }
    }
    async getCity(cityid){
        try {
            const city = await City.findByPk(cityid)
            return city
        } catch (error) {
            throw(error)
        }
    }
    async updateCity(cityid,data){
        try {
            const city = await City.update(data,{
                where : {
                    id:cityid
                }})
            return city;
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = CityRepository;