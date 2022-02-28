const router = require("express").Router();
const authCheck = require("../middleware/check-auth");
const {createIncident} = require("../controllers/incident");

/**
 * @description   this route is used to create Incident
 * @route   GET      /api/incident/
 * @access  Private
 */
router.get("/", authCheck, createIncident);
// router.get("/", createIncident);

module.exports = router;