const express = require('express');
const { PORT } = require('./config/serverconfig');

const app = express();
app.listen(PORT,()=>{
    console.log(`Starting the server at ${PORT}`)
})