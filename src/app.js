
//require = import package express 
const mongoose = require("./db/db");
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); //express connects us to the server 
const router = require("./routes/router")
const port = 3000;
//morgan = logging, helmet = API security, expreess rate limit = rate limits the API based on some coding
const morgan = require("morgan");
const helmet = require("helmet");
const ERL = require("express-rate-limit"); //prevents spam
//configure the middleware
//to read passeed in json files 
app.use(bodyParser.json()); //know as a middleware: a pluging that we install 
app.use((morgan("short"))); //logs information: IP address, response time, route, method. types: standard, common, dev, short, tiny tokens
app.use(helmet()) 
app.use(ERL({
  windowMs: 60 * 1000, //milisecond 
  max: 5, //max number of request a user can make in the time frame of window Ms
  message: "too many request, please slow down"
}));

//contigure routes
app.use("/todos", router); //call routes in /todos path in router

  app.listen(port, () => {
    console.log(`To-do app listening at http://localhost:${port}`)
  })
