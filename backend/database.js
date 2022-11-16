const mongoose = require('mongoose');
const config = require('./config/config.js')

async function connectDB() {
  try {
    await mongoose.connect(config.DB.URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;