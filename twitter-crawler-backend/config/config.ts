require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  AUTHORIZATION: process.env.AUTHORIZATION,
  APIKEY: process.env.APIKEY,
  APISECRET: process.env.APISECRET,
  ACCESSTOKEN: process.env.ACCESSTOKEN,
  ACCESSTOKENSECRET: process.env.ACCESSTOKENSECRET,
  ACCEPT: process.env.ACCEPT,
};
