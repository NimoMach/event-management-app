const express = require("express");
const router = express.Router();
const protect = require("../middleware/protect");

const {
  getEvents,
  getEventById,
} = require("../controllers/eventController");

const {
  registerForEvent,
  cancelRegistration,
} = require("../controllers/registrationController");

router.get("/", getEvents);
router.get("/:id", getEventById);

router.post("/:id/register", protect, registerForEvent);
router.delete("/:id/cancel", protect, cancelRegistration);

module.exports = router;
