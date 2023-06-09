const {FlightService}  = require('../services/index');

const flightService = new FlightService();

exports.createFlight = async(req,res,next)=>{
    try {
        const flight = await flightService.createFlight(req.body)
        if(!flight){
        return res.status(200).json({
        status:"Failed",
        message: "failed to create Flight",
        error
        })
    }
        res.status(200).json({
        status:"Success",
        message: "Flight Created successfully",
        data:flight
    })
    }
    catch(error) {
        res.status(200).json({
        status:"Failed",
        message: "failed to create Flight",
        error
        })}
    }

    exports.getAllflights = async (req,res,next) => {
        try {
        console.log(req.query);
        const flight = await flightService.getAllflights(req.query)
        if(!flight){
            return res.status(200).json({
                status:"Failed",
                message: "failed to create Flight",
                error
                })
        }
        res.status(200).json({
            status:"Success",
            message: "Flight Created successfully",
            data:flight})
        } catch (error) {
            res.status(200).json({
                status:"Failed",
                message: "Some errror in Fetching the flights",
                error
                })
}
        
    }
