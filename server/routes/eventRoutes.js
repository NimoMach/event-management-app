const express = require("express");
const router = express.Router();
const protect = require("../middleware/protect");
const { getUserRegisteredEvents } = require("../controllers/eventController");

const {
  getEvents,
  getEventById,
} = require("../controllers/eventController");

const {
  registerForEvent,
  cancelRegistration,
} = require("../controllers/registrationController");

router.get("/", getEvents);
router.get("/user", protect, getUserRegisteredEvents);
router.get("/:id", getEventById);

router.post("/:id/register", protect, registerForEvent);
router.delete("/:id/cancel", protect, cancelRegistration);



module.exports = router;
