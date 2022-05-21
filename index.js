const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/db");
require("dotenv").config();
const app = express();

//connect mongoDB
connect();

const userRoutes = require('./Routes/UserRoutes')
const profileRoutes =  require('./Routes/ProfileRoutes')
const eventRoutes = require('./Routes/EventRoute')

app.use(bodyParser.json());

//Routes
app.use('/', userRoutes)
app.use('/', profileRoutes)
app.use('/', eventRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Your app is running");
});
