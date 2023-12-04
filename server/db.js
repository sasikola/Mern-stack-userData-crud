const mongoose = require("mongoose");
require("dotenv").config();

//connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Databse Connected successfully");
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });
