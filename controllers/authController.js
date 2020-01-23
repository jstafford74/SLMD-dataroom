const db = require("../models");
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const randomstring = require("randomstring");

// Defining methods for the authController
module.exports = {
  signup: async function (req, res) {

    try {
      let preExistingUser = await db.User.findOne({ username: req.body.username });
      if (preExistingUser) {
        res.status(200).json({
          success: false,
          errors: {username: 'Username already exists'}
        });
        return;
      }
      
      preExistingUser = await db.User.findOne({ email: req.body.email });
      if (preExistingUser) {
        res.status(200).json({
          success: false,
          errors: {email: 'Email already exists'}
        });
        return;
      }

      req.body.passwordHash = await bcrypt.hash(req.body.password, parseInt(process.env.PASSWORD_SALT_ROUNDS, 10));
      const newUser = await db.User.create(req.body);
      res.json({
        success: true,
        jwt: makeJWT(newUser)
      })
    } catch (error) {
      respondWithServerError(res, error);
    }

  },

  login: async function (req, res) {
    try {
      const user = await db.User.findOne({ username: req.body.username });
      if (!user) {
        res.status(200).json({
          success: false,
          errors: {username: 'User not found'}
        });
        return;
      }

      const match = await bcrypt.compare(req.body.password, user.passwordHash);

      if (match) {
        res.json({
          success: true,
          jwt: makeJWT(user)
        })
      } else {
        res.status(200).json({
          sucess: false,
          errors: {password: 'Password is not valid'}
        });
      }

    } catch (error) {
      respondWithServerError(res, error);
    }
  }
};


function respondWithServerError(res, error) {
  res.status(500).json({
    success: false,
    error: { name: error.name, message: error.message }
  });
}

function makeJwts(user) {
  const access = jwt.sign(
    {
      firstName: user.firstName,
      role: user.role
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_DURATION,
      subject: user._id.toString(),
      issuer: 'readinglist-api',
      audience: 'readinglist-react-gui'
    }
  );

  const refresh = jwt.sign(
    {},
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_DURATION,
      subject: randomstring.generate(),
      issuer: 'stlouismed-api',
      audience: 'stlouismed-react-gui'
    }
  );

  return {
    access,
    refresh
  };
}
