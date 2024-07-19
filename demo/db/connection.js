require('dotenv').config();
const mongoose  = require('mongoose');

const url = process.env.DB_URL

mongoose.connect(url)

const db = mongoose.connection;

db.on('connected',()=>{console.log('MongoDB connected')});
db.on('disconnected',()=>{console.log('MongoDB disconnected')})

module.exports = db;