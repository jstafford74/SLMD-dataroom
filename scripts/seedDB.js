require('dotenv').config();
const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const db = require("../models");

// This file empties the Book and User collections and inserts the seeds below

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const demoUserSeed = [
  {
   
    firstName: "Jeremiah",
    lastName: "Stafford",
    username: 'jstafford',
    email: "jstafford@slmdevice.com",
    passwordHash:null,
    role: "user"
  },
  {

    firstName: "George",
    lastName: "Chen",
    username: 'gchen',
    email: "gchen@slmdevice.com",
    passwordHash: null,
    role: "user"
  }
]



async function seed() {
  try {
    // clear DB



    // add demo users
    const saltRounds = parseInt(process.env.PASSWORD_SALT_ROUNDS, 10);
    const password = process.env.SEED_USER_PASSWORD;
    await Promise.all(demoUserSeed.map(async (it) => {
      it.passwordHash = await bcrypt.hash(password, saltRounds);
      return;
    }));

    await db.User.collection.insertMany(demoUserSeed);



    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
