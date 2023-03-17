const {AirportService} = require('../services/index');

const airportService = new AirportService();

exports.createAirport = async (req,res,next)=>{
    try {
    console.log("Hi");
    const airport = await airportService.create(req.body)
    console.log(airport);
    return res.status(200).json({
        status:"Success",
        message:" Airport has been successfully created",
        data:{
            airport
        }
    }) 
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:"Something went wrong",    
        })
    }
}