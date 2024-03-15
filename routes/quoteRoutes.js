const express = require("express");
const router = express.Router();
const addQuotesController = require("../controllers/addQuoteController")
 
router.route('/addQuotes').post(addQuotesController);


module.exports = router;