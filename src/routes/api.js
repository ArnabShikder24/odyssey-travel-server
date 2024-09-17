const express = require('express');
const router = express.Router();
const ExampleController = require('../controllers/ExampleController');
const { createUser, getAllUsers } = require('../controllers/userController');
const { createPack, getAllPack, deletePackById, updatePack, getPackById } = require('../controllers/PackagesController');
const { createHotel, getAllHotels, getHotelById, deleteHotelById } = require('../controllers/HotelCOntroller');

router.get("/example", ExampleController.example);

// user
router.post("/user/create", createUser);
router.get("/users", getAllUsers);

// Package
router.post("/pack/create", createPack);
router.get("/pack", getAllPack);
router.get("/packbyid", getPackById);
router.get("/pack/delete", deletePackById);
router.post("/pack/update", updatePack);

//Hotels
router.post("/hotel/create", createHotel);
router.get("/hotels", getAllHotels);
router.get("/hotelsbyid", getHotelById);
router.get("/hotel/delete", deleteHotelById);


module.exports = router;
