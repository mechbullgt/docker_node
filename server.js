'use strict'

const express = require('express');

const app = express();
const PORT = 8000;
const HOST = '0.0.0.0';

app.get('/',(req,res)=>{
    res.send('Hello From Node!')
})

app.listen(PORT,HOST);
console.log(`Running on https://${HOST}:${PORT}`);