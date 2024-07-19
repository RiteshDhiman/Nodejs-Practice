const express = require('express');
const app = express();
const db = require('./db/connection');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.json())


const menuRoute = require('./routes/menuRoute');
const personRoute = require('./routes/personRoute');

app.use('/menu', menuRoute);
app.use('/person', personRoute);

app.get('/',(req,res)=>{
    res.send('Hello I am fine')
})

app.listen(PORT, ()=>{
    console.log('Server is live on port 5000');
})