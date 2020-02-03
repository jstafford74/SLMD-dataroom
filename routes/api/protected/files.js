const router = require("express").Router();
const fileController = require("../../../controllers/booksController");

// Matches with "/api/protected/books"
router.route("/")
  .get(fileController.findAll)
  

// Matches with "/api/protected/books/:id"
router.route("/:id")
  .get(booksController.findById)
  
module.exports = router;
