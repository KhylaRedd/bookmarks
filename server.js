// DEPENDENCIES
const app = require("./app.js");
//first import app into server

// CONFIGURATION loads in enviorment from .env file
require("dotenv").config();
//
const PORT = process.env.PORT;
//process is just a large object. env is a hidden object in side of it.port is now hidden as well

// LISTEN
app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});