const dotenv = require('dotenv').config();
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require('./DB/connection');



connectDB().then(()=>{
  const app = require('./app');
    app.listen(process.env.PORT, () => {
        console.log(`🔥 Express running → On PORT : ${process.env.PORT}`);
      });
});



