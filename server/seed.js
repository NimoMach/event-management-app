const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Event = require("./models/Event");

dotenv.config();
connectDB();

const seedEvents = async () => {
  try {
    await Event.deleteMany();

    const events = [
      {
        name: "React Conference 2026",
        organizer: "TechWorld",
        location: "Hyderabad",
        date: new Date("2026-03-15T10:00:00"),
        description: "Conference on React and modern frontend development.",
        capacity: 100,
        availableSeats: 3,
        category: "Technology",
      },
      {
        name: "Node.js Bootcamp",
        organizer: "CodeMasters",
        location: "Bangalore",
        date: new Date("2026-04-10T09:00:00"),
        description: "Hands-on backend development workshop.",
        capacity: 80,
        availableSeats: 80,
        category: "Technology",
      },
      {
        name: "Startup Networking Meetup",
        organizer: "Innovate India",
        location: "Mumbai",
        date: new Date("2026-02-20T18:00:00"),
        description: "Networking event for entrepreneurs and investors.",
        capacity: 60,
        availableSeats: 60,
        category: "Business",
      },
      {
        name: "Digital Marketing Summit",
        organizer: "MarketPro",
        location: "Delhi",
        date: new Date("2026-05-05T11:00:00"),
        description: "Latest trends in digital marketing.",
        capacity: 120,
        availableSeats: 120,
        category: "Marketing",
      },
      {
        name: "AI & Machine Learning Expo",
        organizer: "FutureTech",
        location: "Chennai",
        date: new Date("2026-06-12T10:30:00"),
        description: "Explore AI innovations and ML projects.",
        capacity: 150,
        availableSeats: 150,
        category: "Technology",
      },
      {
        name: "UX/UI Design Workshop",
        organizer: "DesignHub",
        location: "Hyderabad",
        date: new Date("2026-01-25T09:30:00"),
        description: "Practical workshop on UI/UX design principles.",
        capacity: 70,
        availableSeats: 70,
        category: "Design",
      },
      {
        name: "Finance & Investment Seminar",
        organizer: "WealthGrow",
        location: "Mumbai",
        date: new Date("2026-07-18T14:00:00"),
        description: "Learn smart investment strategies.",
        capacity: 90,
        availableSeats: 90,
        category: "Finance",
      },
      {
        name: "Photography Masterclass",
        organizer: "LensCraft",
        location: "Pune",
        date: new Date("2026-03-01T16:00:00"),
        description: "Advanced photography techniques.",
        capacity: 40,
        availableSeats: 40,
        category: "Art",
      },
      {
        name: "Health & Wellness Camp",
        organizer: "HealthyLife",
        location: "Delhi",
        date: new Date("2026-02-10T08:00:00"),
        description: "Wellness activities and health checkups.",
        capacity: 200,
        availableSeats: 200,
        category: "Health",
      },
      {
        name: "Cybersecurity Awareness Summit",
        organizer: "SecureIT",
        location: "Bangalore",
        date: new Date("2026-08-14T10:00:00"),
        description: "Protecting digital infrastructure and privacy.",
        capacity: 110,
        availableSeats: 110,
        category: "Technology",
      },

      // ---- Past Events (for Dashboard Testing) ----

      {
        name: "Blockchain Basics",
        organizer: "CryptoLearn",
        location: "Chennai",
        date: new Date("2025-08-10T10:00:00"),
        description: "Introduction to blockchain technology.",
        capacity: 100,
        availableSeats: 100,
        category: "Technology",
      },
      {
        name: "Leadership Conference",
        organizer: "LeadIndia",
        location: "Mumbai",
        date: new Date("2025-07-05T09:00:00"),
        description: "Leadership and management skills workshop.",
        capacity: 85,
        availableSeats: 85,
        category: "Business",
      },
      {
        name: "Art & Craft Exhibition",
        organizer: "CreativeHands",
        location: "Pune",
        date: new Date("2025-09-15T11:00:00"),
        description: "Showcasing handmade art and crafts.",
        capacity: 60,
        availableSeats: 60,
        category: "Art",
      },
      {
        name: "Yoga Retreat",
        organizer: "PeaceLife",
        location: "Rishikesh",
        date: new Date("2025-10-01T07:00:00"),
        description: "Relaxing yoga and meditation retreat.",
        capacity: 50,
        availableSeats: 50,
        category: "Health",
      },
      {
        name: "E-commerce Growth Workshop",
        organizer: "SellSmart",
        location: "Delhi",
        date: new Date("2025-11-20T13:00:00"),
        description: "Scaling your online business.",
        capacity: 75,
        availableSeats: 75,
        category: "Business",
      },
      {
        name: "Game Development Bootcamp",
        organizer: "GameDevPro",
        location: "Hyderabad",
        date: new Date("2025-12-12T10:00:00"),
        description: "Learn game development fundamentals.",
        capacity: 65,
        availableSeats: 65,
        category: "Technology",
      },
      {
        name: "Content Creation Meetup",
        organizer: "CreatorSpace",
        location: "Bangalore",
        date: new Date("2025-06-18T17:00:00"),
        description: "Networking for content creators.",
        capacity: 55,
        availableSeats: 55,
        category: "Marketing",
      },
      {
        name: "Cloud Computing Summit",
        organizer: "CloudNext",
        location: "Chennai",
        date: new Date("2026-09-22T09:00:00"),
        description: "Future of cloud infrastructure.",
        capacity: 140,
        availableSeats: 140,
        category: "Technology",
      },
      {
        name: "Public Speaking Workshop",
        organizer: "SpeakUp",
        location: "Pune",
        date: new Date("2026-04-25T15:00:00"),
        description: "Improve confidence and communication skills.",
        capacity: 45,
        availableSeats: 45,
        category: "Personal Development",
      },
      {
        name: "Data Science Conference",
        organizer: "DataWorld",
        location: "Mumbai",
        date: new Date("2026-10-05T10:00:00"),
        description: "Exploring data science trends and tools.",
        capacity: 130,
        availableSeats: 130,
        category: "Technology",
      },
    ];

    await Event.insertMany(events);

    console.log("20 Events Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedEvents();
