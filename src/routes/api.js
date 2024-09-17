const express = require('express');
const router = express.Router();
const ExampleController = require('../controllers/ExampleController');
const { createUser, getAllUsers } = require('../controllers/userController');
const { createPack, getAllPack, deletePackById, updatePack, getPackById } = require('../controllers/PackagesController');
const { createHotel, getAllHotels, getHotelById, deleteHotelById } = require('../controllers/HotelCOntroller');
const { createFlight, getAllFlights, getFlightById, deleteFlightById } = require('../controllers/FlightsController');
const { createTourGuide, getAllTourGuides, getTourGuideById, deleteTourGuideById } = require('../controllers/GuidesController');

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

// Flights Routes
router.post("/flight/create", createFlight);
router.get("/flights", getAllFlights);
router.get("/flight", getFlightById);
router.get("/flight/delete", deleteFlightById);

// Tour Guide routes
router.post("/tour_guide/create", createTourGuide);
router.get("/tour_guides", getAllTourGuides);
router.get("/tour_guide", getTourGuideById);
router.get("/tour_guide/delete", deleteTourGuideById);


module.exports = router;
