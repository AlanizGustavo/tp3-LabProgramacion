const mongoose = require('mongoose');
const config = require('./config/config.js')
require('dotenv').config();

function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;