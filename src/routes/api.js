const express = require('express');
const router = express.Router();
const ExampleController = require('../controllers/ExampleController');

router.get("/example", ExampleController.example);


module.exports = router;
