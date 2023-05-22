const express = require("express");

const {
    followUser,
    unfollowUser,
    removeFollower,
    getAllFollowers,
    getAllFollowing
} = require("../controllers/followControllers");

const router = express.Router();

router.post('/follow', followUser);
router.delete('/unfollow', unfollowUser);
router.delete('/remove-follower', removeFollower);
router.get('/followers', getAllFollowers);
router.get('/following', getAllFollowing);

module.exports = router;