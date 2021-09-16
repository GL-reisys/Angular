const express = require("express");
const petController = require("../controllers/petController");
const router = express.Router()

router.route("/")
    .post(petController.createPetPost);

router.route("/:userid")
    .get(petController.getAllAvailablePets)

module.exports = router;