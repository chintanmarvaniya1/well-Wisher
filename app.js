const express = require("express");
const app = express();
const user = require("./routes/userRoutes");
const sheduleCronJobs = require("./utilities/cronJobs");

sheduleCronJobs()

app.use(express.json());
app.use('/api',user)



module.exports = app;