const express = require('express');
const { PORT } = require('./config/serverconfig');

const serverSetupStart = async ()=>{
    const app = express();
    app.use(express.json());
    app.listen(PORT,async ()=>{
    console.log(`Starting the server at ${PORT}`)
})
}

serverSetupStart();
