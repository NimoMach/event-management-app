const Event = require("../models/Event");
const Registration = require("../models/Registration");

// @route   POST /api/events/:id/register
// @desc    Register for event
// @access  Private
const registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check capacity
    if (event.availableSeats <= 0) {
      return res.status(400).json({ message: "Event is full" });
    }

    // Check duplicate registration
    const existingRegistration = await Registration.findOne({
      user: req.user._id,
      event: event._id,
    });

    if (existingRegistration) {
      return res.status(400).json({ message: "Already registered" });
    }

    // Create registration
    await Registration.create({
      user: req.user._id,
      event: event._id,
    });

    // Decrease available seats
    event.availableSeats -= 1;
    await event.save();

    res.json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @route   DELETE /api/events/:id/cancel
// @desc    Cancel event registration
// @access  Private
const cancelRegistration = async (req, res) => {
  try {
    const registration = await Registration.findOne({
      user: req.user._id,
      event: req.params.id,
    });

    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    await registration.deleteOne();

    const event = await Event.findById(req.params.id);
    event.availableSeats += 1;
    await event.save();

    res.json({ message: "Registration cancelled" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerForEvent,
  cancelRegistration,
};
