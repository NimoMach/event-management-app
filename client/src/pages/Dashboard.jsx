import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchUserEvents();
  }, []);

  const fetchUserEvents = async () => {
    const res = await API.get("/api/events/user");
    setEvents(res.data);
  };

  const now = new Date();

  const upcoming = events.filter(
    (event) => new Date(event.date) >= now
  );

  const past = events.filter(
    (event) => new Date(event.date) < now
  );

  return (
    <div>
      <h2>My Registered Events</h2>

      <h3>Upcoming Events</h3>
      {upcoming.length === 0 && <p>No upcoming events</p>}
      {upcoming.map((event) => (
        <div key={event._id}>
          <h4>{event.name}</h4>
          <p>{event.location}</p>
          <p>{new Date(event.date).toLocaleDateString()}</p>
        </div>
      ))}

      <h3>Past Events</h3>
      {past.length === 0 && <p>No past events</p>}
      {past.map((event) => (
        <div key={event._id}>
          <h4>{event.name}</h4>
          <p>{event.location}</p>
          <p>{new Date(event.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
