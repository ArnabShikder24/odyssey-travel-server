const express = require('express');
const router = express.Router();
const ExampleController = require('../controllers/ExampleController');
const { createUser, getAllUsers } = require('../controllers/userController');
const { createPack, getAllPack } = require('../controllers/PackagesController');

router.get("/example", ExampleController.example);


router.post("/user/create", createUser);
router.get("/users", getAllUsers);
router.post("/pack/create", createPack);
router.get("/pack", getAllPack);


module.exports = router;
