const express = require('express');
const router = express.Router();
const ExampleController = require('../controllers/ExampleController');
const { createUser, getAllUsers } = require('../controllers/userController');

router.get("/example", ExampleController.example);


router.post("/user/create", createUser);
router.get("/users", getAllUsers);


module.exports = router;
