const mongoose  = require('mongoose');

const url = "mongodb://127.0.0.1:27017/hotels";

mongoose.connect(url)

const db = mongoose.connection;

db.on('connected',()=>{console.log('MongoDB connected')});
db.on('disconnected',()=>{console.log('MongoDB disconnected')})

module.exports = db;