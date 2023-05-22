const express = require("express");

const {
    followUser, searchUser, getAllUsers, editProfile
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/search", searchUser);
router.put("/edit", editProfile);
router.get("/", getAllUsers);

module.exports = router;