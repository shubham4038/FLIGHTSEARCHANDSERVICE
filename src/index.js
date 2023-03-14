const express = require('express');
const { PORT } = require('./config/serverconfig');
const cityRouter = require('./routes/cityRoute')
const {Airport,City} = require('./models/index');
const db = require('./models/index')

const serverSetupStart = async ()=>{
    const app = express();
    app.use(express.json());
    app.use('/api/v1',cityRouter)
    app.listen(PORT,async ()=>{
    console.log(`Starting the server at ${PORT}`)
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true})
    };
    const city = await City.findOne({
        where :{
            id: 6
        }
    })
    console.log(city);
    const airport = await city.getAirports();
    console.log(airport);
})
}

serverSetupStart();


