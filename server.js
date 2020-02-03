require('dotenv').config();
const express = require("express");
const passport = require('passport');
const mongoose = require("mongoose");
const routes = require("./routes")

const app = express();
const PORT = process.env.PORT || 3001;

require('./auth/jwt')();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

//Connet to mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});