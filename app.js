const express = require("express");
const app = express();
const user = require("./routes/userRoutes");
const quote = require("./routes/quoteRoutes");
const sheduleCronJobs = require("./utilities/cronJobs");

sheduleCronJobs()

app.use(express.json());
app.use('/api',user)
app.use('/api',quote)



module.exports = app;