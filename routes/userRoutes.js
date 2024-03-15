const express = require("express");
const router = express.Router();
const addUserController = require("../controllers/addUserController")
 
router.route('/addUser').post(addUserController);


module.exports = router;