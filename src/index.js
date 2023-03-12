const express = require('express');
const { PORT } = require('./config/serverconfig');
const cityRouter = require('./routes/cityRoute')

const serverSetupStart = async ()=>{
    const app = express();
    app.use(express.json());
    app.use('/api/v1',cityRouter)
    app.listen(PORT,async ()=>{
    console.log(`Starting the server at ${PORT}`)
})
}

serverSetupStart();
