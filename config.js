const { version } = require("os");

require("dotenv").config();
const config = {
  app: {
    name: process.env.APP_NAME || "Default App",
    version: process.env.APP_VERSION || "1.0.0",
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 8080,
  },
};
console.log(config.app);
module.exports = config;
