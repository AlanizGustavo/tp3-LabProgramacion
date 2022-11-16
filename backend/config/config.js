const config = {
  jwtSecret: process.env.JWT_SECRET || 'mysecrettoken',
  DB: {
    URI: process.env.MONGODB_URI || 'mongodb://mongo:27017/lighttube',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};

module.exports = config;