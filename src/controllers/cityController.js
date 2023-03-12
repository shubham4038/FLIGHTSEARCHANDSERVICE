const CityService = require('../services/index');

const CityService = new CityService();

exports.Create = async (req,res,next)=>{
    try {
        const city = await CityService.createCity(req.body)
        res.status(200).json({
            status:"Success",
            message: "Succesfully created",
            data:city
        })
    } catch (error) {
        res.status(401).json({
            status:"Failed",
            message:"Something went wrong"
        })
    }
    
}
exports.destroy = async (req,res,next)=>{
    try {
        const city = await CityService.deleteCity(req.params.id)
        res.status(200).json({
            status:"Success",
            message: "Succesfully Deleted",
        })
    } catch (error) {
        res.status(401).json({
            status:"Failed",
            message:"Something went wrong"
        })
    }
    
}
exports.updateCity = async (req,res,next)=>{
    try {
        const city = await CityService.updateCity(req.params.id,req.body)
        res.status(200).json({
            status:"Success",
            message: "Succesfully created",
            data:city
        })
    } catch (error) {
        res.status(401).json({
            status:"Failed",
            message:"Something went wrong"
        })
    }
    
}
exports.getCity = async (req,res,next)=>{
    try {
        const city = await CityService.getCity(req.params.id)
        res.status(200).json({
            status:"Success",
            message: "Succesfully created",
            data:city
        })
    } catch (error) {
        res.status(401).json({
            status:"Failed",
            message:"Something went wrong"
        })
    }
    
}