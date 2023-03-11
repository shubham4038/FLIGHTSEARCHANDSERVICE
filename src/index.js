const express = require('express');

const { PORT } = require('./config/serverconfig');

const serverSetupStart = async ()=>{
    const app = express();
    app.use(express.json());
    app.listen(PORT,()=>{
    console.log(`Starting the server at ${PORT}`)
})
}

serverSetupStart();
