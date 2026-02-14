import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div>
      <h3>{event.name}</h3>
      <p>Category: {event.category}</p>
      <p>Location: {event.location}</p>
      <p>
        Date:{" "}
        {new Date(event.date).toLocaleDateString()}
      </p>
      <Link to={`/event/${event._id}`}>View Details</Link>
    </div>
  );
}

export default EventCard;
