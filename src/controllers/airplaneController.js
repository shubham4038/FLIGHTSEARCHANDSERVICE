const { AirplaneService} = require('../services/index');

const airplaneService = new AirplaneService();

exports.create = async(req,res,next)=>{
    try {
        const airplane = await airplaneService.createAirplane(req.body);
        res.status(200).json({
            status:"Success",
            message:" Airplane has been successfully created",
            data:{
                airplane
            }
        })
    } catch (error) {
        res.status(200).json({
            status:"Failed",
            message:"Something went wrong",    
        })
    }
}
exports.destroy = async (req,res,next)=>{
    try {
        const airplane = await airplaneService.deleteAirplane(req.params.id)
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
exports.updateAirplane = async (req,res,next)=>{
    try {
        const city = await AirplaneService.updateAirplane(req.params.id,req.body)
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
exports.getAirplane = async (req,res,next)=>{
    try {
        const airplane = await airplaneService.getAirplane(req.params.id)
        console.log(airplane);
        res.status(200).json({
            status:"Success",
            message: "Succesfully created",
            data:airplane
        })
    } catch (error) {
        res.status(401).json({
            status:"Failed",
            message:"Something went wrong"
        })
    }
    
}