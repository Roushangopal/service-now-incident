const router = require("express").Router();
const authCheck = require("../middleware/check-auth");
const {createIncident} = require("../controllers/incident");

/**
 * @description   this route is used to get loggedin user info
 * @route   GET      /user/
 * @access  Private
 */
// router.get("/", authCheck, createIncident);
router.get("/", createIncident);

module.exports = router;