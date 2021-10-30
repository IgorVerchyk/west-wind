require('dotenv').config();

module.exports = {
  port: process.env.PORT,

  jwt: {
    secretOrKey: process.env.JWT_SECRET_KEY
  },

  mongo: {
    url: process.env.URI_DB,
    options: {
      dbName: "westwind",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  }
};