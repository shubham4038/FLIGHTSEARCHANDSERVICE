const {CityRepository} = require('../repository/index')

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = this.cityRepository.createCity({name})
            return city
        } catch (error) {
            console.log("Something went wrong")
            throw(error)
        }
    }
    async deleteCity(cityid){
        try {
            const city = this.cityRepository.deleteCity(cityid)
            return city
        } catch (error) {
            console.log("Something went wrong")
            throw(error)
        }
    }
    async getCity(cityid){
        try {
            const city = this.cityRepository.getCity(cityid)
            return city
        } catch (error) {
            console.log("Something went wrong")
            throw(error)
        }
    }
    async updateCity(cityid,data){
        try {
            const city = this.cityRepository.updateCity(cityid,data)
            return city
        } catch (error) {
            console.log("Something went wrong")
            throw(error)
        }
    }
}

module.exports = {
    CityService
}