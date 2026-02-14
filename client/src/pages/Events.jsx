import { useState, useEffect } from "react";
import API from "../api";
import EventCard from "../components/EventCard";

function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  // Debounce search (500ms delay)
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchEvents();
    }, 500);

    return () => clearTimeout(delay);
  }, [search, category, location]);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      // Only send non-empty params
      const params = {};
      if (search.trim()) params.search = search.trim();
      if (category.trim()) params.category = category.trim();
      if (location.trim()) params.location = location.trim();

      const res = await API.get("/api/events", { params });

      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Explore Events</h2>

      <input
        type="text"
        placeholder="Search by event name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="text"
        placeholder="Filter by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="text"
        placeholder="Filter by location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {!loading && events.length === 0 && <p>No events found</p>}

      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
}

export default Events;
