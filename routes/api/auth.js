const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/auth/"
router.route("/", function () {
  console.log('/ route hit');
})


// see http://www.passportjs.org/docs/
// Matches with "/api/auth/login"
router.use("/dataroom",function(){
  console.log('/dataroom route hit');
})


module.exports = router;
