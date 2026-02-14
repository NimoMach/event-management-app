const Event = require("../models/Event");

// @route   GET /api/events
// @desc    Get all events with search & filters
// @access  Public
const getEvents = async (req, res) => {
  const { search, category, location } = req.query;
  let query = {};

  if (search) query.name = { $regex: search, $options: "i" };
  if (category) query.category = category;
  if (location) query.location = location;

  const events = await Event.find(query);

  res.json(events);
};

// @route   GET /api/events/:id
// @desc    Get event details
// @access  Public
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getEvents,
  getEventById,
};
