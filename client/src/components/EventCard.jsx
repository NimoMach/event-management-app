import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div>
      <h3>{event.name}</h3>
      <p>{event.location}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>Available Seats: {event.availableSeats}</p>
      <Link to={`/event/${event._id}`}>View Details</Link>
    </div>
  );
}

export default EventCard;
